import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import React from 'react';
import axios from "axios";
import {
    img_500,
    unavailable,
    unavailableLandscape,
  } from "../../config/config";
const style = {
  position: 'absolute',
  width: "90%",
 height: "80%",
  top: '50%',
  borderRadius:3,
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#25282e',
  border: '1px solid #282c34',
  boxShadow:25,
  p: 2.5,
};

export default function DetailModel({children ,media_type,id}) {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = useState([]);
  const [vedio, setvedio] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fecthdata = async () => {
    const { data } = await axios.get( `https://api.themoviedb.org/3/discover/${media_type}/${id}?api_key=aaee4992a92ef84849f52f4bdc19fb50`
    );

    console.log(data);
    setContent(data.results);


  };
  const fecthVideo= async () => {
    const { data } = await axios.get( `https://api.themoviedb.org/3/discover/${media_type}/${id}videos?api_key=aaee4992a92ef84849f52f4bdc19fb50`
    );

    console.log(data);
    setvedio(data.results[0]);

  };
  useEffect(() => {
    window.scroll(0, 0);
    fecthdata();
    fecthVideo();

  }, []);
  return (
    <div>
      <Button type="button" className='media' onClick={handleOpen}>
               {children}        
                   </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <div className="DetailModel">
                <img
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                  className="DetailModel__portrait"
                />
                <img
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={content.name || content.title}
                  className="DetailModel__landscape"
                />
                <div className="DetailModel__about">
                  <span className="DetailModel__title">
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}

                  <span className="DetailModel__description">
                    {content.overview}
                  </span>

                  {/* <div>
                    <Carousel id={id} media_type={media_type} />
                  </div> */}

                  {/* <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button> */}
                </div>
                </div>

          </Box>
        </Fade>
      </Modal>
    </div>
  );
}