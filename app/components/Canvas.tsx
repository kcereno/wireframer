import { LayoutConfig } from '~/types/layout';
import { getComponent } from '~/utils/components';
import { getScreenWidth } from '~/utils/sizing';

function Canvas({ screenSize, components }: LayoutConfig) {
  const maxWidth = getScreenWidth(screenSize);

  return (
    <div className="flex justify-center mx-10">
      <div className={`${maxWidth}  w-full border rounded-lg p-1`}>
        {components.map((component, index) => {
          const { type, config } = component;
          const Component = getComponent({
            type,
            config,
          });

          return <Component key={index} />;
        })}
      </div>
    </div>
  );
}

export default Canvas;
