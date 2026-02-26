import {notFound} from "next/navigation";

interface RouteParams {
    project: string;
}

const projects: string[] = []

export default async function Project(params: Promise<RouteParams>) {
    const { project } = await params;

    if (!(project in projects)) {
        notFound();
    }

    return <></>;
}
