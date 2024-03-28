import "./style.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useRef } from "react";
export default function App() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/"
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/"
    },
    {
      original: "https://picsum.photos/id/1027/1000/600/",
      thumbnail: "https://picsum.photos/id/1027/250/150/"
    },
    {
      original: "https://picsum.photos/id/1026/1000/600/",
      thumbnail: "https://picsum.photos/id/1026/250/150/"
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/"
    },
    {
      original: "https://picsum.photos/id/1025/1000/600/",
      thumbnail: "https://picsum.photos/id/1025/250/150/"
    },
    {
      original: "https://picsum.photos/id/1024/1000/600/",
      thumbnail: "https://picsum.photos/id/1024/250/150/"
    },
    {
      original: "https://picsum.photos/id/1023/1000/600/",
      thumbnail: "https://picsum.photos/id/1023/250/150/"
    },
    {
      original: "https://picsum.photos/id/1022/1000/600/",
      thumbnail: "https://picsum.photos/id/1022/250/150/"
    },
    {
      original: "https://picsum.photos/id/1021/1000/600/",
      thumbnail: "https://picsum.photos/id/1021/250/150/"
    }
  ];
const slideshowref = useRef();
  function playSlides(){
    slideshowref.current.play();
  }
return (
    <div className="App">
      <ImageGallery
      ref = {slideshowref}
        items={images}
        showPlayButton={true}
        showFullscreenButton={true}
        slideInterval={1000}
        slideOnThumbnailOver={true}
        showIndex={true}
        onPlay={() => {
          alert("slideshow is now playing!");
        }}
      />
    
      <button onClick={playSlides} class="button-56" role="button">Play</button>
    </div>
  );
}
