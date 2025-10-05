import type { CollectionEntry } from "astro:content";

type Props = {
  images: CollectionEntry<"projects">["data"]["images"];
};

export default function Carousel({ images }: Props) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div class="carousel-container">
      <div class="carousel-track">
        {images.map((image, index) => (
          <div key={index} class="carousel-slide">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
