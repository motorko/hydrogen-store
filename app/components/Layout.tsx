import {PropsWithChildren} from 'react';
import {LayoutData} from '~/root';
import Announcement from './Announcement';

interface LayoutProps extends PropsWithChildren {
  layout: LayoutData;
}

export default function Layout({layout, children}: LayoutProps) {
  return (
    <>
      {layout.announcementMenu?.items.length ? (
        <Announcement items={layout.announcementMenu.items} />
      ) : null}
      <main id="main-content" className="h-screen">
        {children}
      </main>
    </>
  );
}
