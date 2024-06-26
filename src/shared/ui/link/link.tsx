'use client';

export const Link = (id: string | null) => {
  if (!id) return null;
  
  return (
    <a
      href={`https://stellar.expert/explorer/public/account/${id}`}
      target="_blank"
      className="stellar_address"
    >
      {id.replace(id.substring(4, id.length - 4), "...")}
    </a>
  );
};
