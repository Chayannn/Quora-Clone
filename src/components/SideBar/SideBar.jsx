import React from 'react';
import SideBarItems from './SideBarItems';
import { BsPlus } from 'react-icons/bs';

function SideBar() {
  return (
    <div className="flex flex-col mt-4 mr-7">
      <SideBarItems title="Create Space" Icon={BsPlus} />
      <SideBarItems
        title="Human Body"
        imageUrl={'https://media.sciencephoto.com/image/n2000014/800wm'}
      />
      <SideBarItems
        title="Sports"
        imageUrl={
          'https://cdn.vectorstock.com/i/1000x1000/85/43/athlete-avatar-with-sport-icon-vector-10798543.webp'
        }
      />
      <SideBarItems
        title="Psychology Tricks"
        imageUrl={
          'https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_600/https://online.une.edu/wp-content/uploads/2020/08/Online-psychology-courses.jpg'
        }
      />
      <SideBarItems
        title="Everything"
        imageUrl={
          'https://www.creativefabrica.com/wp-content/uploads/2020/08/27/Monogram-ET-Logo-V2-Graphics-5151502-1-1-580x386.jpg'
        }
      />
      <SideBarItems
        title="Anime & Manga"
        imageUrl={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT71ER4SFBUV2jQPpwOcQM5YNXS0Z1pveWRtfMVnGRc3AePowvw'
        }
      />
      <SideBarItems
        title="Personal Finance"
        imageUrl={
          'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRr2EDr-c1G9RQpEFoDkNa6HbwcemSM-eFgKPYH8gG2l8dLI8F8'
        }
      />
      <SideBarItems
        title="Fix your English"
        imageUrl={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdLyxW5sNHYgQy-XI3ILrkFgKVGuDPm_NB-ff6GmuQSiv4E4BR'
        }
      />
      <SideBarItems
        title="Education"
        imageUrl={
          'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTZ2AVvUxDHOVXeDCf9g_VcADbc-kyLzzpozaIwuIL_-f62bG2I'
        }
      />
    </div>
  );
}

export default SideBar;
