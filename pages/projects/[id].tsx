import type { GetStaticProps, GetStaticPropsContext } from "next";
import { useEffect } from "react";

type Project = {
  project: {
    name: string;
    description: string;
  };
};

export default function Projects({ project }: Project) {
  return (
    <div>
      <div>{project.name}</div>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  return {
    props: {
      project: {
        name: `project${params.id}`,
        description: "sect",
      },
    },
  };
}
