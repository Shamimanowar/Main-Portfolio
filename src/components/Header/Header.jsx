import React, { useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { headerVariants, getMenuStyles } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  return (
    <motion.div
      initial="hidden"
      whileInView={"show"}
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={`${css.name}`}>Shamim</div>

        <ul
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+880 1612 879888</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>
        <div
          onClick={() => setMenuOpened((prev) => !prev)}
          className={` ${css.menuIcon}`}
        >
          <BiMenuAltRight size={32} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
