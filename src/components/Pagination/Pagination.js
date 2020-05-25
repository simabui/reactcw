import React, { useEffect } from 'react';
import css from './Pagination.module.css';
import Button from '../Button/Button';

const Pagination = props => {
  useEffect(() => {
    const { allPosts, limit, changePage, getLastPost, posts } = props;

    const firstEl = allPosts.indexOf(posts[0]);
    /* calc current page */
    const currentPage = Math.ceil((firstEl - 1) / limit) + 1;
    changePage(currentPage);
    /* calc last post index */
    const lastEl = allPosts.indexOf(posts[posts.length - 1]);
    getLastPost(lastEl);
  }, [props.posts]);

  const { getPrevious, getNext, page, allPosts, limit } = props;
  const totalPage = Math.ceil(allPosts.length / limit);
  return (
    <div className={css.pagination}>
      <Button variant="contained" onClick={() => getPrevious()} disabled={page === 1}>
        ←
      </Button>
      <p>{page}</p>
      <Button variant="contained" onClick={() => getNext()} disabled={page === totalPage}>
        →
      </Button>
    </div>
  );
};

export default Pagination;
