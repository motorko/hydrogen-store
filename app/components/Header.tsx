import {Transition} from '@headlessui/react';
import clsx from 'clsx';
import {Fragment, useEffect, useRef, useState} from 'react';
import {useClickAway} from 'react-use';
import {EnhancedMenu, EnhancedMenuItem} from '~/lib/utils';
import Input from './form/Input';
import Icons from './Icons';
import {Link} from './Link';

interface HeaderProps {
  menu: EnhancedMenu;
  withAnnouncement: boolean;
}

const Logo = () => (
  <svg
    width="86"
    height="48"
    viewBox="0 0 86 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.4615 36V34.432H3.4535C3.8375 34.432 4.17883 34.3893 4.4775 34.304C4.77617 34.1973 5.01083 33.9947 5.1815 33.696C5.3735 33.376 5.4695 32.9067 5.4695 32.288V16.736C5.4695 16.1387 5.3735 15.7013 5.1815 15.424C4.9895 15.1253 4.74417 14.9333 4.4455 14.848C4.14683 14.7627 3.81617 14.72 3.4535 14.72H2.4615V13.152H12.7335C15.0375 13.152 17.0002 13.5787 18.6215 14.432C20.2642 15.264 21.5228 16.512 22.3975 18.176C23.2722 19.84 23.7095 21.888 23.7095 24.32C23.7095 26.6453 23.2935 28.6827 22.4615 30.432C21.6508 32.1813 20.4348 33.5467 18.8135 34.528C17.1922 35.5093 15.1548 36 12.7015 36H2.4615ZM11.9975 34.144C13.5548 34.144 14.8455 33.76 15.8695 32.992C16.9148 32.2027 17.6935 31.072 18.2055 29.6C18.7388 28.128 19.0055 26.3573 19.0055 24.288C19.0055 22.2187 18.7388 20.5013 18.2055 19.136C17.6935 17.7493 16.9148 16.7147 15.8695 16.032C14.8455 15.328 13.5655 14.976 12.0295 14.976H9.8215V34.144H11.9975ZM26.3 36V34.432H26.396C26.8867 34.432 27.3133 34.3787 27.676 34.272C28.06 34.1653 28.3587 33.952 28.572 33.632C28.8067 33.2907 28.924 32.7893 28.924 32.128V22.592C28.924 21.952 28.8173 21.4827 28.604 21.184C28.3907 20.864 28.1027 20.6613 27.74 20.576C27.3773 20.4693 26.9613 20.416 26.492 20.416H26.396V18.848H32.284L32.892 21.6H33.052C33.3293 20.96 33.6387 20.4053 33.98 19.936C34.3427 19.4667 34.8013 19.1147 35.356 18.88C35.9107 18.624 36.636 18.496 37.532 18.496C38.748 18.496 39.644 18.7093 40.22 19.136C40.8173 19.5627 41.116 20.1813 41.116 20.992C41.116 21.8453 40.8067 22.528 40.188 23.04C39.5693 23.5307 38.6627 23.776 37.468 23.776C37.468 23.1787 37.4147 22.6987 37.308 22.336C37.2227 21.952 37.0627 21.664 36.828 21.472C36.5933 21.28 36.2733 21.184 35.868 21.184C35.292 21.184 34.8227 21.3973 34.46 21.824C34.0973 22.2293 33.8093 22.7413 33.596 23.36C33.404 23.9787 33.2653 24.6187 33.18 25.28C33.116 25.9413 33.084 26.496 33.084 26.944V32.288C33.084 32.9067 33.1907 33.376 33.404 33.696C33.6173 33.9947 33.9053 34.1973 34.268 34.304C34.6307 34.3893 35.0253 34.432 35.452 34.432H36.444V36H26.3ZM47.4648 36.32C46.5261 36.32 45.6728 36.1387 44.9048 35.776C44.1581 35.392 43.5608 34.816 43.1128 34.048C42.6861 33.28 42.4728 32.3093 42.4728 31.136C42.4728 29.4293 43.0701 28.16 44.2648 27.328C45.4594 26.496 47.2621 26.0373 49.6728 25.952L52.3288 25.856V24.032C52.3288 23.3067 52.2754 22.6667 52.1688 22.112C52.0621 21.536 51.8381 21.088 51.4968 20.768C51.1768 20.448 50.6648 20.288 49.9608 20.288C49.3208 20.288 48.8194 20.4373 48.4568 20.736C48.0941 21.0347 47.8488 21.4507 47.7208 21.984C47.5928 22.496 47.5288 23.0827 47.5288 23.744C46.2914 23.744 45.3634 23.5947 44.7448 23.296C44.1261 22.976 43.8168 22.432 43.8168 21.664C43.8168 20.896 44.0941 20.2773 44.6488 19.808C45.2248 19.3387 45.9928 18.9973 46.9528 18.784C47.9128 18.5707 48.9581 18.464 50.0888 18.464C52.2221 18.464 53.8221 18.88 54.8888 19.712C55.9554 20.5227 56.4888 21.9307 56.4888 23.936V32.16C56.4888 32.736 56.5421 33.1947 56.6488 33.536C56.7768 33.856 56.9901 34.0907 57.2888 34.24C57.5874 34.368 57.9714 34.432 58.4408 34.432H58.5368V36H53.2248L52.5848 33.6H52.3288C51.8594 34.176 51.4114 34.6667 50.9848 35.072C50.5794 35.4773 50.0994 35.7867 49.5448 36C49.0114 36.2133 48.3181 36.32 47.4648 36.32ZM48.8408 34.112C49.5661 34.112 50.1848 33.9413 50.6968 33.6C51.2088 33.2587 51.6034 32.768 51.8808 32.128C52.1794 31.488 52.3288 30.7413 52.3288 29.888V27.424L50.6648 27.52C49.6621 27.5627 48.8728 27.7333 48.2968 28.032C47.7421 28.3307 47.3368 28.7467 47.0808 29.28C46.8461 29.8133 46.7288 30.4747 46.7288 31.264C46.7288 31.904 46.8034 32.4373 46.9528 32.864C47.1021 33.2693 47.3368 33.5787 47.6568 33.792C47.9768 34.0053 48.3714 34.112 48.8408 34.112ZM60.3915 36V34.432H60.9995C61.3835 34.432 61.7568 34.3893 62.1195 34.304C62.4822 34.1973 62.7808 33.9947 63.0155 33.696C63.2715 33.376 63.3995 32.9067 63.3995 32.288V20.768H60.5195V18.848H63.3995V17.504C63.3995 15.5627 63.9115 14.0587 64.9355 12.992C65.9808 11.9253 67.5382 11.392 69.6075 11.392C70.8875 11.392 71.8795 11.488 72.5835 11.68C73.3088 11.872 73.8208 12.1387 74.1195 12.48C74.4395 12.8213 74.5995 13.216 74.5995 13.664C74.5995 14.112 74.4715 14.4853 74.2155 14.784C73.9595 15.0613 73.5648 15.2747 73.0315 15.424C72.5195 15.5733 71.9008 15.648 71.1755 15.648C71.1755 15.2853 71.1115 14.9013 70.9835 14.496C70.8768 14.0907 70.6955 13.7493 70.4395 13.472C70.1835 13.1947 69.8315 13.056 69.3835 13.056C68.7008 13.056 68.2208 13.376 67.9435 14.016C67.6875 14.656 67.5595 15.6587 67.5595 17.024V18.848H72.0075V20.768H67.5595V32.288C67.5595 32.9067 67.6768 33.376 67.9115 33.696C68.1462 33.9947 68.4555 34.1973 68.8395 34.304C69.2235 34.3893 69.5968 34.432 69.9595 34.432H71.3675V36H60.3915ZM79.994 36.32C78.4793 36.32 77.3167 35.9467 76.506 35.2C75.7167 34.4533 75.322 33.152 75.322 31.296V20.896H72.89V19.392C73.466 19.392 74.01 19.2747 74.522 19.04C75.034 18.8053 75.4607 18.5173 75.802 18.176C76.122 17.8133 76.41 17.3653 76.666 16.832C76.922 16.2987 77.1247 15.648 77.274 14.88H79.482V18.848H83.61V20.896H79.482V31.136C79.482 32.1387 79.6633 32.8853 80.026 33.376C80.41 33.8453 80.9647 34.08 81.69 34.08C82.1167 34.08 82.5007 34.0587 82.842 34.016C83.2047 33.952 83.5567 33.8773 83.898 33.792V35.616C83.578 35.7653 83.066 35.9147 82.362 36.064C81.6793 36.2347 80.89 36.32 79.994 36.32Z" />
  </svg>
);

export default function Header({menu, withAnnouncement}: HeaderProps) {
  return (
    <header
      className={`sticky z-40 bg-white shadow-deeph0 ${clsx({
        'top-0': !withAnnouncement,
        'top-10': withAnnouncement,
      })}`}
    >
      <div className="flex items-center justify-between py-2 lg:py-0">
        <div className="w-1/3 lg:w-2/5">
          <MobileMenu items={menu.items} withAnnouncement={withAnnouncement} />
          <DesktopMenu items={menu.items} />
        </div>
        <div className="w-1/3 lg:w-1/5">
          <Link to="/" className="mx-auto block w-fit">
            <Logo />
          </Link>
        </div>
        <div className="w-1/3 lg:w-2/5 flex justify-end gap-x-4 pr-4">
          <Link to="/search" className="hidden lg:block">
            <Icons icon="search" />
          </Link>
          <Link to="/account" className="hidden lg:block">
            <Icons icon="account" />
          </Link>
          <Link to="/cart">
            <Icons icon="cart" />
          </Link>
        </div>
      </div>
    </header>
  );
}

interface MenuProps {
  items: EnhancedMenuItem[];
}

function MobileMenu({
  items,
  withAnnouncement,
}: MenuProps & {withAnnouncement: boolean}) {
  const [open, setOpen] = useState<boolean>(false);
  const [animmateInner, setAnimmateInner] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<string | undefined>();

  useEffect(() => {
    setTimeout(() => {
      setAnimmateInner(open);
    }, 0);
  }, [open]);

  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false), ['click']);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="px-4 flex items-center justify-center lg:hidden"
        aria-label="Open menu"
      >
        <Icons icon="burger" />
      </button>
      <Transition
        show={open}
        as="nav"
        className={`lg:hidden fixed left-0 right-0 bottom-0 bg-overlayDark transition-colors overflow-hidden ${clsx(
          {
            'top-[105px]': withAnnouncement,
            'top-[65px]': !withAnnouncement,
          },
        )}`}
        onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) =>
          event.code === 'Escape' ? setOpen(false) : null
        }
        enterFrom="bg-transparent"
        enterTo="bg-overlayDark"
        leaveFrom="bg-overlayDark"
        leaveTo="bg-transparent"
      >
        <Transition
          show={animmateInner}
          as="div"
          ref={ref}
          className="bg-white w-full py-5 h-fit max-h-full overflow-auto transition-transform"
          enterFrom="-translate-y-full"
          enterTo="translate-y-0"
          leaveFrom="translate-y-0"
          leaveTo="-translate-y-full"
        >
          <form action="/search" className="px-4">
            <Input
              type="search"
              submitButton
              className="w-full"
              name="q"
              placeholder="Search"
            />
          </form>
          <ul className="pt-2">
            {items.map((item) => {
              return (
                <Fragment key={item.id}>
                  <li>
                    {item.items.length ? (
                      <div
                        role="button"
                        tabIndex={item.items.length ? 0 : -1}
                        className="px-4 py-2 flex justify-between items-center"
                        onClick={() =>
                          setDropdown(
                            item.id === dropdown ? undefined : item.id,
                          )
                        }
                        onKeyDown={(event) => {
                          if (
                            event.code === 'Enter' ||
                            event.code === 'Space'
                          ) {
                            setDropdown(
                              item.id === dropdown ? undefined : item.id,
                            );
                          }
                        }}
                      >
                        <Link
                          to={item.to}
                          target={item.target}
                          className={({isActive}) =>
                            `bottom-line pr-2 ${clsx({active: isActive})}`
                          }
                        >
                          {item.title}
                        </Link>
                        <span
                          className={`relative top-[2px] transition-transform`}
                        >
                          <Icons icon="chevron-bottom" />
                        </span>
                      </div>
                    ) : (
                      <div className="px-4 py-2">
                        <Link
                          to={item.to}
                          target={item.target}
                          className={({isActive}) =>
                            `bottom-line pr-2 ${clsx({active: isActive})}`
                          }
                        >
                          {item.title}
                        </Link>
                      </div>
                    )}
                  </li>
                  {item.items.length ? (
                    <ul
                      className={`pb-2 ${clsx({
                        hidden: item.id !== dropdown,
                      })}`}
                    >
                      {item.items.map((item) => {
                        return (
                          <Fragment key={item.id}>
                            <li className="pl-6 pr-4 py-1">
                              <Link
                                to={item.to}
                                target={item.target}
                                className={({isActive}) =>
                                  `bottom-line pr-2 ${clsx({active: isActive})}`
                                }
                              >
                                {item.title}
                              </Link>
                            </li>
                            {item.items.length
                              ? item.items.map((item) => {
                                  return (
                                    <li
                                      key={item.id}
                                      className="pl-8 pr-4 py-1"
                                    >
                                      <Link
                                        to={item.to}
                                        target={item.target}
                                        className={({isActive}) =>
                                          `bottom-line pr-2 ${clsx({
                                            active: isActive,
                                          })}`
                                        }
                                      >
                                        {item.title}
                                      </Link>
                                    </li>
                                  );
                                })
                              : null}
                          </Fragment>
                        );
                      })}
                    </ul>
                  ) : null}
                </Fragment>
              );
            })}
          </ul>
        </Transition>
      </Transition>
    </>
  );
}

function DesktopMenu({items}: MenuProps) {
  const [megaMenu, setMegaMenu] = useState<string | undefined>();

  return (
    <nav className="hidden lg:block">
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
      className="absolute left-0 w-full px-4 py-6 transition-all bg-white top-[calc(100%+1px)] shadow-deeph0"
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
