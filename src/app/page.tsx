import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md">{RESUME_DATA.about}</p>
            <p className="max-w-md items-center text-pretty text-xs">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none"
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url} target="_blank">
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="size-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <hr className="mt-4" />
        <Section>
          <h2 className="text-xl font-bold">Acerca</h2>
          <p className="text-pretty">{RESUME_DATA.summary}</p>
          <hr className="mt-4" />
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Experiencia Laboral</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      {work.link ? (
                        <a
                          className="mt-5 text-blue-600 underline"
                          href={work.link ? work.link : ""}
                          target="_blank"
                        >
                          {work.company}
                        </a>
                      ) : (
                        <span className="mt-5 text-blue-600">
                          {work.company}
                        </span>
                      )}

                      <span className="mt-5 inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="ml-4 align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-black-400 mt-5 text-pretty text-xs">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="leading-none">
                    {work.achievements.map((achievement) => (
                      <>
                        <p
                          className="mt-5 text-pretty"
                          key={achievement.description}
                        >
                          {achievement.description}

                          {achievement.repository ? (
                            <span className="mt-4">
                              <span className="mx-1 font-bold">
                                Repositorio:
                              </span>
                              <a
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                href={achievement.repository.link}
                              >
                                {achievement.repository.description}
                              </a>
                            </span>
                          ) : null}
                        </p>
                      </>
                    ))}
                  </h4>

                  <div>
                    <h2 className="my-4 text-sm font-bold">
                      Stack de Tecnologías Empleadas
                    </h2>
                    <div className="flex flex-wrap gap-1">
                      {work.techStack.map((skill) => {
                        return <Badge key={skill}>{skill}</Badge>;
                      })}
                    </div>
                  </div>
                </CardHeader>
                <hr className="mt-4" />
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Educación</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none text-green-800">
                      {education.school}
                    </h3>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
                <hr className="mt-4" />
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Stack de Tecnologías</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
          <hr className="mt-4" />
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Proyectos</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-1 lg:grid-cols-1">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
      </section>
    </main>
  );
}
