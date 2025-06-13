// ProductMetadata.tsx
interface MetadataProps {
  title: string;
  description: string;
  canonicalLink: string;
}

export const FamuqueMetadata = ({ title, description, canonicalLink }: MetadataProps) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalLink} />
    </>
  );
};
