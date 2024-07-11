export interface BlogCardProps {
  image: string;
  title: string;
  subTitle: string;
  url: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  subTitle,
  url,
}) => {
  return (
    <a href={url} className="px-2.5 block w-full">
      <div
        className="w-full h-blog-card bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className=" text-13 text-black leading-relaxed font-light">
        {subTitle}
      </div>
      <div className=" text-base text-black leading-relaxed font-light">
        {title}
      </div>
    </a>
  );
};
