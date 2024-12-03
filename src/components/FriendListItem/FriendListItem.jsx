import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img src={avatar} alt={`${name} avatar`} width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx({ [css.online]: isOnline, [css.offline]: !isOnline })}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </>
  );
}
