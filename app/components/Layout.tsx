import {PropsWithChildren} from 'react';
import {LayoutData} from '~/root';
import Announcement from './Announcement';
import Header from './Header';

interface LayoutProps extends PropsWithChildren {
  layout: LayoutData;
}

export default function Layout({layout, children}: LayoutProps) {
  const announcementItems = layout?.announcementMenu?.items.length
    ? layout.announcementMenu.items
    : null;

  const headerMenu = layout?.headerMenu?.items.length
    ? layout.headerMenu
    : null;

  return (
    <>
      {announcementItems ? <Announcement items={announcementItems} /> : null}

      {headerMenu ? (
        <Header
          menu={headerMenu}
          withAnnouncement={Boolean(announcementItems?.length)}
        />
      ) : null}

      <main id="main-content" className="h-screen">
        {children}
      </main>
    </>
  );
}
