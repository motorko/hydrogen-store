import {Link} from '~/components/Link';
import {EnhancedMenuItem} from '~/lib/utils';

interface AnnouncementProps {
  items: EnhancedMenuItem[];
}

export default function Announcement({items}: AnnouncementProps) {
  const content =
    items.length > 1 ? (
      [...new Array(3)].map(() => {
        return (
          <div
            key={Math.random()}
            className="flex justify-around w-full min-w-max conveyor-belt gap-x-20 shrink-0 group-hover:animation-pause"
          >
            {items.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={item.to}
                  target={item.target}
                  prefetch="intent"
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        );
      })
    ) : (
      <Link
        key={items[0].id}
        to={items[0].to}
        target={items[0].target}
        prefetch="intent"
      >
        {items[0].title}
      </Link>
    );

  return (
    <div className="sticky top-0 flex justify-center px-3 py-2 overflow-hidden text-center text-white bg-black group">
      {content}
    </div>
  );
}
