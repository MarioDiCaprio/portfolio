import Link from "next/link";
import {GalleryVerticalEnd} from "lucide-react";

export default function NotFound() {
    return (
        <div className="w-full pt-20 flex justify-center items-center flex-col">
            <header className="flex items-center flex-col gap-5">
                <h1 className="text-3xl">
                    404: Project Not Found
                </h1>
                <p className="text-center">
                    The project you were looking for does not exist.
                </p>
                <Link href="/projects" className="link flex items-center gap-3">
                    <GalleryVerticalEnd aria-hidden size="1em" />
                    <span>
                        Go back to the Project Gallery
                    </span>
                </Link>
            </header>
        </div>
    );
}
