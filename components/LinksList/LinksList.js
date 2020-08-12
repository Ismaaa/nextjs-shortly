import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import LinkItem from './LinkItem';
import useLocalStorage from '../../hooks/useStorage';
import { setLinks } from '../../store/ducks/links';

const LinksList = () => {
  const dispatch = useDispatch();
  const { links } = useSelector((store) => store.links);
  const [value, setValue] = useLocalStorage('links', []);

  // storage to state
  useEffect(() => {
    dispatch(setLinks(value));
  }, []);

  // state to storage
  useEffect(() => {
    setValue(links);
  }, [links]);

  if (links.length === 0) return <div />;

  return (
    <div className="LinksList">
      {links.map((link) => (
        <LinkItem key={uuidv4()} link={link} />
      ))}
    </div>
  );
};

export default LinksList;
