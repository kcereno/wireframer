import { LayoutConfig } from '~/types/layout';
import { getWidth } from '~/utils/sizing';

function Canvas({ screen, components }: LayoutConfig) {
  const maxWidth = getWidth(screen);

  return (
    <div className="flex justify-center mx-10">
      <div className={`${maxWidth} bg-red-300 w-full border rounded-xl`}>
        {components.map((component) => {
          return (
            <div
              key={component.type}
              className="navbar bg-base-100"
            >
              <div className="flex-1">
                <a
                  href="/"
                  className="btn btn-ghost text-xl"
                >
                  daisyUI
                </a>
              </div>
              <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Canvas;
