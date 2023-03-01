import {Transition} from '@headlessui/react';
import clsx from 'clsx';
import {useEffect, useRef, useState} from 'react';
import {useClickAway} from 'react-use';
import {EnhancedMenu, EnhancedMenuItem} from '~/lib/utils';
import Icons from './Icons';
import {Link} from './Link';

interface HeaderProps {
  menu: EnhancedMenu;
}

export default function Header({menu}: HeaderProps) {
  return (
    <header className="sticky z-40 bg-white top-10 shadow-deeph0">
      <div className="relative flex items-center justify-between">
        <div className="w-2/5">
          <DesktopMenu items={menu.items} />
        </div>
        <div className="w-1/5"></div>
        <div className="w-2/5"></div>
      </div>
    </header>
  );
}

interface MenuProps {
  items: EnhancedMenuItem[];
}

function DesktopMenu({items}: MenuProps) {
  const [megaMenu, setMegaMenu] = useState<string | undefined>();

  return (
    <nav>
      <ul className="flex">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-1 px-4 py-6">
            <Link
              to={item.to}
              target={item.target}
              prefetch="intent"
              className={({isActive}) =>
                `bottom-line ${clsx({active: isActive})}`
              }
            >
              {item.title}
            </Link>
            {item.items.length ? (
              <>
                <button
                  onClick={() => setMegaMenu(item.id)}
                  className={`relative top-[2px] transition-transform ${clsx({
                    '-rotate-180': megaMenu === item.id,
                  })}`}
                  tabIndex={0}
                >
                  <Icons icon="chevron-bottom" />
                </button>
                <MegaMenu
                  items={item.items}
                  close={() => setMegaMenu(undefined)}
                  isShowing={megaMenu === item.id}
                />
              </>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}

interface MegaMenuProps extends MenuProps {
  isShowing: boolean;
  close: () => void;
}

function MegaMenu({items, isShowing, close}: MegaMenuProps) {
  const ref = useRef(null);
  useClickAway(ref, close, ['click']);
  return (
    <Transition
      show={isShowing}
      as="div"
      ref={ref}
      onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) =>
        event.code === 'Escape' ? close() : null
      }
      className="absolute left-0 w-full px-4 py-6 transition-all bg-white top-full shadow-deeph0"
      enterFrom="opacity-0 translate-y-full"
      enterTo="opacity-100 translate-y-0"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-full"
    >
      <ul className="flex flex-wrap gap-20">
        {items.map((item) => (
          <li key={item.id} className="text-lg font-semibold ">
            <Link
              to={item.to}
              target={item.target}
              prefetch="intent"
              className={({isActive}) =>
                `bottom-line uppercase ${clsx({active: isActive})}`
              }
            >
              {item.title}
            </Link>
            {item.items.length ? (
              <ul className="flex flex-col gap-2 pt-3 font-normal">
                {item.items.map((item) => (
                  <li key={item.id} className="text-sm">
                    <Link
                      to={item.to}
                      target={item.target}
                      prefetch="intent"
                      className={({isActive}) =>
                        `bottom-line ${clsx({active: isActive})}`
                      }
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </Transition>
  );
}
