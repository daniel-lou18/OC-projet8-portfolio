import { client as sanity } from "./sanityClient";
import { ServiceError } from "./ServiceError";

type Project = {
  title: string;
  description: string;
  websiteUrl: string;
  gitHubUrl: string;
  position: number;
  image: {
    asset: {
      _ref: string;
    };
  };
};

export type ProjectWithImage = Omit<Project, "image"> & {
  image: string;
};

export async function getProjectsWithImage(): Promise<ProjectWithImage[]> {
  const query = `*[_type == "project"]{
    title,
    description,
    websiteUrl,
    gitHubUrl,
    position,
    "image": image.asset->url
  }`;

  try {
    const res = await sanity.fetch<ProjectWithImage[]>(query);
    return res;
  } catch (err: unknown) {
    console.error(err);
    if (err instanceof Error) {
      throw new ServiceError(err.message, 500, "FetchError");
    }
    throw new ServiceError(
      "An unexpected error occurred while fetching projects",
      500,
      "FetchError",
    );
  }
}
