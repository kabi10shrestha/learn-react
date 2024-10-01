import { AvatarProps } from "@/types/avatar";
import { GalleryProps } from "@/types/gallery";
import { ListItemProps } from "@/types/listItem";

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Avatar
            scientist={{ 
              name: 'Maria Skłodowska-Curie', 
              imageId: 'szV5sdGs', 
              profession:'physicist and chemist', 
              awards:'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal', 
              discovery:'polonium (element)'}}
            size={200} />
      <Avatar
            scientist={{ 
              name: 'Katsuko Saruhashi', 
              imageId: 'YfeOqp2s', 
              profession:'geochemist', 
              awards:'Miyake Prize for geochemistry, Tanaka Prize', 
              discovery:'a method for measuring carbon dioxide in seawater'}}
            size={200} />
    </div>
  );
}


function Avatar(galleryProps: GalleryProps) {
  const {scientist, size = 100} = galleryProps
  const awardCount = scientist.awards.split(',').length;
  return (
    <div>
    <section className="profile">
        <h2>$person.name</h2>
        <img
          className="avatar"
          src={`https://i.imgur.com/${scientist.imageId}.jpg`}
          alt={`${scientist.name}`}
          width={70}
          height={70}
        />
        <ListItem
          label="Profession"
          content={scientist.profession}
        />
        <ListItem
          label={`Awards (${awardCount})`}
          content={scientist.awards}
        />
        <ListItem
          label="Discovered"
          content={scientist.discovery}
          />
    </section>
    </div>
        );
}


function ListItem({ label, content }: ListItemProps) {
  return (
    <ul>
      <li>
        <b>{label}: </b> {content}
      </li>
    </ul>
  );
}
