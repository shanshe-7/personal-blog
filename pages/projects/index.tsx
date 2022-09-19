import { getProjects } from "helpers/getProjects";

type Project = {
  fields: {
    name: string;
    id: number;
  };
};

type Projects = {
  projects: Project[];
};

export default function Projects({ projects }: Projects) {
  console.log(projects);
  return (
    <>
      {projects?.map((project) => {
        return <div key={project.fields.id}>{project?.fields?.name}</div>;
      })}
    </>
  );
}

export async function getStaticProps() {
  const projects = await getProjects();

  return {
    props: {
      projects: projects?.items,
    },
  };
}
