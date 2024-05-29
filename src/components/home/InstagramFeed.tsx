import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";

interface MediaItem {
  id: string;
  media_url: string;
  media_type: string;
  permalink: string;
  thumbnail_url?: string;
  children?: {
    data: {
      media_type: string;
      media_url: string;
      thumbnail_url: string;
    }[];
  };
}

const InstagramFeed: React.FC = () => {
  const [feedList, setFeedList] = useState<MediaItem[]>([]);

  async function getInstaFeed() {
        const token = 'IGQWRPLW1YT0ZAXQkt3bTNKTDhYSkQweTJJQlZAqV1EtVWREakxoZAUw0ZAkNZAdDVQTU5hbWxaREtIdWhVdjBFR3lScUIza3plU2FGOF8ydmlfX05udHFGc1RGTnVpeWtDR3ZAOdDBQS3hGTFVrMnhEQ3FBSWFfZA3ZAKUjgZD';
        
    const fields = "media_url,media_type,permalink,children{media_type,media_url,thumbnail_url},thumbnail_url"
    const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;
    const { data } = await axios.get(url);
    setFeedList(data.data);
  }

  useEffect(() => {
    getInstaFeed();
  }, []);

  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    speed: 4000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className="container-fluid mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
            <div className="bg-white p-4 rounded-lg shadow-lg text-center h-full">
              <img
                className="w-96 rounded-full mx-auto lg:mx-0 mb-4"
                src="/img/logo2.png"
                alt="profile_pic_avatar"
              />
              <h2 className="text-xl font-bold mb-2">
                <p className="text-gray-800">INSTAGRAM</p>
                <p className="text-orange-600 flex items-center justify-center">
                  @4marketbrasil
                <i className="ml-2 fa-brands fa-instagram text-4xl text-pink-800"></i>
                </p>
              </h2>
              <a
                href="https://www.instagram.com/4marketbrasil/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-blue-500 bg-blue-700 p-2 rounded"
              >
                Seguir
              </a>
            </div>
          </div>
          <div className="w-full lg:w-3/4 px-4">
            <div className="instagram-feed">
              <Slider {...settings} arrows={true}>
                {feedList.filter((e) => e.media_type !== 'VIDEO').map((item) => (
                  <div className="item" key={item.id}>
                    <div className="feed-content">
                      {item.media_type === "IMAGE" &&
                        <a href={item.permalink} target="_blank" rel="noreferrer">
                          <img className="slick-slide-insta" src={item.media_url} />
                        </a>
                      }
                      {item.media_type === "VIDEO" &&
                        <video controls poster={item.thumbnail_url}>
                          <source src={item.media_url} />
                        </video>
                      }
                      {item.media_type === "CAROUSEL_ALBUM" &&
                        <a href={item.permalink} key={item.id} target="_blank" rel="noreferrer">
                          <img className="slick-slide-insta" src={item.children?.data[0].media_url} alt="" />
                        </a>
                      }
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
