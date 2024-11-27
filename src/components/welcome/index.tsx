import { css } from '@emotion/react';
// import { unstable_cache } from 'next/cache';
import SimInput from '../Input';
// import { db } from '@/database/db';

const homeCss = {
  wrapper: css({
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  head: css({
    height: '60px',
    width: '100%',
  }),
  content: css({
    flex: 1,
    width: '100%',
    background: '#d8d8d2',
  }),
  footer: css({
    height: '60px',
    width: '50%',
    padding: '12px 0',
  }),
};

const WelcomePage: React.FC = () => {
  // console.log('getUsers', getUsers);
  // const [list, setList] = useState<any>(getUsers);

  // const getCachedPosts = unstable_cache(
  //   async () => {
  //     return await db.query.usersTable.findMany();
  //   },
  //   ['posts'],
  //   { revalidate: 3600, tags: ['posts'] },
  // );
  // console.log('list', getCachedPosts);

  return (
    <div css={homeCss.wrapper}>
      <div css={homeCss.head}>head</div>
      <div css={homeCss.content}>
        {/* {list?.map((item: any) => <span key={item.id}>{item.name}</span>)} */}
      </div>
      <div css={homeCss.footer}>
        <SimInput />
      </div>
    </div>
  );
};

export default WelcomePage;
