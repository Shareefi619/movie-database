import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FaRegWindowClose } from "react-icons/fa";

interface MovieCardProps {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
}
// ... Other imports and code ...

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  overview,
  poster_path,
}) => {
  const imgUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "/no-image-available.png";

  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="relative">
      <motion.div
        layoutId={id}
        onClick={() => setSelectedId(id)}
        className="cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ zIndex: selectedId === id ? 2 : 1 }}
      >
        <Card sx={{ maxWidth: 345, borderRadius: "16px" }}>
          <CardMedia
            sx={{ height: 0, paddingTop: "100%" }} // 16:9 aspect ratio
            image={imgUrl}
            title={title}
          />
          <CardContent className="bg-stone-800">
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              fontWeight={800}
              fontSize="1.25rem"
              lineHeight="1.5"
              className="text-slate-50"
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              fontSize="1rem"
              className="text-slate-200"
            >
              {overview.substring(0, 20) + "..."}
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
      <AnimatePresence>
        {selectedId === id && (
          <>
            <div className="fixed inset-0 bg-black/75 opacity-70 backdrop-blur z-2"></div>
            <motion.div
              layoutId={id}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-stone-800 rounded-md p-2 w-1/2"
              style={{ zIndex: 3 }}
            >
              <div className="flex items-end justify-end">
                <FaRegWindowClose
                  className="text-white text-2xl cursor-pointer p-2"
                  size={40}
                  color="red"
                  onClick={() => setSelectedId(null)}
                />
              </div>
              {/* <CardMedia
            sx={{ height: 0, paddingTop: "35%"}} // 16:9 aspect ratio
            image={imgUrl}
            title={title}
            
          /> */}
              {/* <CardMedia
                component="div" // Use a div instead of the default media element
                sx={{
                  height: "200px", // Set the desired height
                  backgroundSize: "cover", // Apply bg-cover class
                  backgroundPosition: "center", // Adjust bg position as needed
                  backgroundImage: `url(${imgUrl})`, // Set the background image
                }}
                title={title}
              /> */}
              <div className="w-full h-40">
                <CardMedia
                  component="div"
                  sx={{
                    height: "100%", // Take full height of the parent div
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: `url(${imgUrl})`,
                  }}
                  title={title}
                />
              </div>

              <div className="flex">
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  fontWeight={800}
                  fontSize="1.25rem"
                  lineHeight="1.5"
                  className=" text-slate-50"
                >
                  {title}
                </Typography>
              </div>
              <Typography
                variant="body2"
                fontSize="1rem"
                className="text-slate-200"
              >
                {overview}
              </Typography>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MovieCard;
