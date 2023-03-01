import {PropsWithChildren} from 'react';
import {LayoutData} from '~/root';
import Announcement from './Announcement';
import Header from './Header';

interface LayoutProps extends PropsWithChildren {
  layout: LayoutData;
}

export default function Layout({layout, children}: LayoutProps) {
  return (
    <>
      {layout?.announcementMenu?.items.length ? (
        <Announcement items={layout.announcementMenu.items} />
      ) : null}
      {layout?.headerMenu?.items.length ? (
        <Header menu={layout.headerMenu} />
      ) : null}
      <main id="main-content" className="h-screen">
        {children}
      </main>
    </>
  );
}
