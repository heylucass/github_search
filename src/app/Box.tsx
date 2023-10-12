import { Fragment } from "react";

export function Box({
  name, description, like
}: {
  name: string;
  description: string;
  like: number;
}) {
  return (
    <Fragment>
      <div className='flex flex-col max-w-sm max-h-96 overflow-hidden rounded p-3 items-center gap-x-4 shadow-sm border-quinacridone_magenta border-spacing-1 border-solid border-2 bg-slate-900'>

        <div className="flex items-center gap-x-4">

          <time dateTime="2020-03-16" className="text-gray-500">
            Mar 16, 2020
          </time>

          <a href="#" className="relative z-10 rounded-full bg-gray-600 py-1.5 px-2 text-gray-100">
            {like} Likes
          </a>

        </div>

        <div className="group overflow-hidden">

          <h3 className="mt-3 text-lg font-bold text-gray-600">
            <a href="#">
              {name}
            </a>
          </h3>

          <p className="mt-5 line-clamp-3 text-sm font-semibold leading-6 text-gray-600">
            {description}
          </p>

        </div>

      </div>
    </Fragment>
  );
}
