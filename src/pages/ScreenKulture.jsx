import { useSearchParams } from "react-router-dom";
import "./ScreenKulture.css";

const topRated = [
  {
    id: 1,
    title: "My Mother is a Witch",
    trailerSrc: "fPPZJH34DPE",
    downloadSrc:"https://drive.google.com/file/d/1Y8qwkRZjt9mSHQw3cCS85u92ilxS7Qlk/view?usp=drivesdk",
    description: "Starring: Efe Irele, Timini Egbuson",
  },
  {
    id: 2,
    title: "4 4 44",
    trailerSrc: "DeaMn7snG90",
    downloadSrc: "https://drive.google.com/file/d/1dzbPMZfV1vqZ5Iu5IsHOXaDXiCxwuhfw/view?usp=drivesdk",
    description: "Starring: Nse Ekpe Etim, Richard Mofe, Damijo Efe Irele.",
  },
  {
    id: 3,
    title: "A Lagos Love Story",
    trailerSrc: "UV_VeRUdXRs",
    downloadSrc: "https://drive.google.com/file/d/1MxMa9yXNDLZa_rg16MW98YiIQKKxJk_N/view?usp=drivesdk",
    description: "Starring:Jemima Osunde.",
  },
  {
    id: 4,
    title: "A Sunday Affair",
    trailerSrc: "i8zGoNpLm60",
    downloadSrc: "https://drive.google.com/file/d/14S-uUluEpSmfPf5kD-C_9tROzxnpxdta/view?usp=drivesdk",
    description: "Starring: Nse Ekpe Etim, Dakore Akande.",
  },
  {
    id: 5,
    title: "A Weekend Fiasco", 
    trailerSrc: "xVxG_WRFhN4",
    downloadSrc: "https://drive.google.com/file/d/10J2NGuySITz36Vo5_u-YgK1vOvasLywq/view?usp=drivesdk",
    description: "Starring: Ini Edo.",
  },
  {
    id: 6,
    title: "Bro Code",
    trailerSrc: "JXGI9fxRe6U",
    downloadSrc: "https://drive.google.com/file/d/1vLMeOONjg-B-m--LU9CKGDML304RAzea/view?usp=drivesdk",
    description: "Starring: Daniel Etim Effiong.",
  },
  {
    id: 7,
    title: "Devil is a Liar",
    trailerSrc: "pBlHVYmpY9Q",
    downloadSrc: "https://drive.google.com/file/d/1pan6Q928YazWurKirGMF-t6IZJPfWNK6/view?usp=drivesdk",
    description: "Starring: Nse Ikpe Etim.",
  },
  {
    id: 8,
    title: "Domitilla",
    trailerSrc: "_YBkZcDuW6E",
    downloadSrc: "https://drive.google.com/file/d/16xwDdu3FdtCQEGWmyHu4H8U7eV9QoB_F/view?usp=drivesdk",
    description: "Starring: Nse Ikpe Etim, Femi Jacobs.",
  },
  {
    id: 9,
    title: "Elevator Baby",
    trailerSrc: "HY6Izj9EuqU",
    downloadSrc: "https://drive.google.com/file/d/1s1dtNEmt0S7H5g4h5cvaUBHHDZKJED2f/view?usp=drivesdk",
    description: "Starring: Timini Egbuson.",
  },
  {
    id: 10,
    title: "Gbomo Gbomo Express",
    trailerSrc: "p3FbvKwXL8M",
    downloadSrc: " https://drive.google.com/file/d/1I-FsEx9iAMATt8VX1EfzFF5IiIlnf7RC/view?usp=drivesdk",
    description: "Starring: Osas Ighodaro, Ramsey Nouah.",
  },
  {
    id: 11,
    title: "Fine Wine",
    trailerSrc: "A8UrciuQ7DA",
    downloadSrc: "https://drive.google.com/file/d/1KDxUKIv380lsNsbNShsAkWBySX-dWonN/view?usp=drivesdk",
    description: "Starring: Richard Mofe, Nse Ikpe Etim, Belinda Effah, Keppy Ekpenyong.",
  },
  {
    id: 12,
    title: "Hey You",
    trailerSrc: "TIUIdk6k3f4",
    downloadSrc: "https://drive.google.com/file/d/1sPIo9NGSXlvMXV2gnIOjTDR2zbpEZv1S/view?usp=drivesdk",
    description: "Starring: Efe Irele, Timini Egbuson.",
  },
  {
    id: 13,
    title: "Honey Money",
    trailerSrc: "kZ4ztn6KQgQ",
    downloadSrc: "https://drive.google.com/file/d/13nWehM5hOUlF82fQ6rzU0i63SEWdHl9-/view?usp=drivesdk",
    description: "Starring: Nancy Isime, Timini Egbuson.",
  },
  {
    id: 14,
    title: "Isoken",
    trailerSrc: "PS4s6QH_RHI",
    downloadSrc: "https://drive.google.com/file/d/1HgeKG0PHatW7W0t-DP9jg4ma5_QAtDgG/view?usp=drivesdk",
    description: "Starring: Dakore Akande, Efa Iwara, Jemima Osunde, Patrick Doyle.",
  },
  {
    id: 15,
    title: "Love in a Pandemic",
    trailerSrc: "jdUe0ui3qPA",
    downloadSrc: "https://drive.google.com/file/d/1PoChN0BjKdCiQjM9bgjW_BXQy1jSwntO/view?usp=drivesdk",
    description: "Starring: Nancy Isime.",
  },
  {
    id: 16,
    title: "Love in a Showroom",
    trailerSrc: "GitmiJAfnwU",
    downloadSrc: "https://drive.google.com/file/d/18hnawj0v1p-950JVbWsqsKkvLPa5K6-7/view?usp=drivesdk",
    description: "Starring: Timini Egbuson, Nancy Isime.",
  },
  {
    id: 17,
    title: "Love is Yellow",
    trailerSrc: "c1WQYPgZXjE",
    downloadSrc: "https://drive.google.com/file/d/1_XI82jbw7dWfL2IMrkT1LNlQ1jftH5AR/view?usp=drivesdk",
    description: "Starring: Timini Egbuson.",
  },
  {
    id: 18,
    title: "The Wedding Party",
    trailerSrc: "M8XaN1DtI7E",
    downloadSrc: "https://drive.google.com/file/d/1UAm9_6BCHJYxmY8ZTb06qnHC9GVVsRPr/view?usp=drivesdk",
    description: "Starring: Adesuwa Etomi Wellington, Richard Mofe Damijo, Somkele Iyamah, Beverly Naya, Atunyota Alleluya Akpobome.",
  },
  {
    id: 19,
    title: "When Love Strikes",
    trailerSrc: "T9T8fZLxLs8",
    downloadSrc: "https://drive.google.com/file/d/1DxJ1waWffGLUZ5XKTlZ-9pMOcUByMm3c/view?usp=drivesdk",
    description: "Starring: Osas Ighodaro.",
  },
  {
    id: 20,
    title: "Thinline",
    trailerSrc: "ITLI1TvFQpI",
    downloadSrc: "https://drive.google.com/file/d/1xUes4vPl3bO1ukihlDtS99Dlhu7fKINg/view?usp=drivesdk",
    description: "Starring: Mercy Aigbe, Yvonne Jegede, Uche Montana.",
  },
  {
    id: 21,
    title: "The Herd",
    trailerSrc: "hsw09H7AcSA",
    downloadSrc: "https://drive.google.com/file/d/12Hm5G-BAisPHY8fHqc1azjQzw0gUMfqQ/view?usp=drivesdk",
    description: "Starring: Daniel Etim Effiong.",
  },
  {
    id: 22,
    title: "Summer Rain",
    trailerSrc: "pTAheLPUWIw",
    downloadSrc: "https://drive.google.com/file/d/16WXebG-oNgFJdv1cdn4ijFEJ-6QIoCmy/view?usp=drivesdk",
    description: "Starring: Daniel Etim Effiong.",
  },
  {
    id: 23,
    title: "Rent A Room",
    trailerSrc: "HNUIw3RCg1s",
    downloadSrc: "https://drive.google.com/file/d/1yl9gOSPus_RiQRF1lAAgC7h55EE4Lsmh/view?usp=drivesdk",
    description: "Starring: Ini Edo.",
  },
  {
    id: 24,
    title: "Reel Love",
    trailerSrc: "YocYLX9R8xI",
    downloadSrc: "https://drive.google.com/file/d/1b3JqwJ-h8OY3GGigl9waCyPofJNNrekQ/view?usp=drivesdk",
    description: "Starring: Timini Egbuson.",
  },
  {
    id: 25,
    title: "My Village People",
    trailerSrc: "xCOHWaTJmFE",
    downloadSrc: "https://drive.google.com/file/d/1tAVgqTUqRD_uDJaKgynfAzPJPTpXp6AK/view?usp=drivesdk",
    description: "Starring: Bovi Ugboma, Venita Akpofure, Charles Inojie, Racheal Oniga, Sophia Alakija, Theresa Edem.",
  }
];

const youtubePicks = [
  { id: 1, videoId: "dQw4w9WgXcQ", credit: "Original video by Author Name" },
];

function ScreenKulture() {
  const [searchParams] = useSearchParams();
  const section = searchParams.get("section") || "top-rated";

  if (section === "youtube-picks") {
    return (
      <div className="page screen-kulture-page">
        <h1>YouTube Picks</h1>
        <div className="sk-grid">
          {youtubePicks.map((item) => (
            <div className="sk-card" key={item.id}>
              <div className="video-embed landscape">
                <iframe
                  src={`https://www.youtube.com/embed/${item.videoId}`}
                  title={item.credit}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="video-credit">{item.credit}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="page screen-kulture-page">
      <h1>Top Rated</h1>
      <div className="sk-grid">
        {topRated.map((item) => (
          <div className="sk-card" key={item.id}>
            <h3 className="video-title">{item.title}</h3>
            <div className="video-embed landscape">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${item.trailerSrc}`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                loading="lazy"
              />
            </div>
            <a href={item.downloadSrc} download className="cta-button">
              Download Film
            </a>
            <p className="video-description">{item.description}</p>
            <p className="video-description">
              Note: Southerntrybe uses third party for it's download links,
              clicking download will redirect you to the external source.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScreenKulture;
