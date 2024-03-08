import { FaUniversalAccess } from "react-icons/fa";
import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import { MdOutlineTextFields } from "react-icons/md";
import { FaMousePointer } from "react-icons/fa";
import { RiFontSize } from "react-icons/ri";
import { MdPauseCircle } from "react-icons/md";
import { MdInvertColors } from "react-icons/md";
import { BsBrightnessAltHighFill } from "react-icons/bs";
import { IoInvertMode } from "react-icons/io5";
import { IoContrast } from "react-icons/io5";
import { BsTextareaResize } from "react-icons/bs";
import { IoLinkSharp } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import { GrPowerReset } from "react-icons/gr";
import { CgLoadbar } from "react-icons/cg";
import ReadingMask from "./ReadingMask";
const Accessibility = (props) => {
  const [open, setOpen] = useState(false);
  const [textOption, setTextOption] = useState(false);
  const [textSize, setTextSize] = useState(0);

  const [bigCursor, setBigCursor] = useState(false);
  const [readableFont, setReadableFont] = useState(false);
  const [pauseAnimation, setPauseAnimation] = useState(false);
  const [invertColor, setInvertColor] = useState(false);
  const [brightness, setBrightness] = useState(false);
  const [brightnessStep, setBrightnessStep] = useState(0);

  const [contrast, setContrast] = useState(false);
  const [contrastStep, setContrastStep] = useState(0);

  const [grayscale, setGrayscale] = useState(false);
  const [mask, setMask] = useState(false);
  const [highlight, setHighlight] = useState(false);
  function adjustFontSize(element, reset) {
    if (element.nodeType === Node.ELEMENT_NODE && element.hasChildNodes()) {
      if (!element.classList.contains("access-tools")) {
        // Check if the element is not within access-tools
        const children = element.childNodes;
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (
            child.nodeType === Node.TEXT_NODE &&
            child.textContent.trim() !== ""
          ) {
            const computedStyle = window.getComputedStyle(element);
            const currentFontSize = parseFloat(computedStyle.fontSize);
            if (!isNaN(currentFontSize)) {
              const newFontSize = reset
                ? currentFontSize - 9 + "px"
                : currentFontSize + 3 + "px"; // Increase by 3px
              element.style.fontSize = newFontSize;
            }
            break; // Only adjust the font size of the first text node
          } else {
            adjustFontSize(child, reset); // Recursively check child nodes
          }
        }
      }
    }
  }
  const pauseUpdate = () => {
    const svgElements = document.querySelectorAll("svg");

    svgElements.forEach((svgElement) => {
      svgElement.classList.toggle("animate");

      if (!pauseAnimation) {
        // Pause the animation by pausing all animations
        svgElement.pauseAnimations();
      } else {
        // Resume the animation by unpausing all animations
        svgElement.unpauseAnimations();
      }
    });
  };
  const toggleAOSAttributes = () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
      if (card.getAttribute("data-aos")) {
        card.removeAttribute("data-aos");
        card.removeAttribute("data-aos-offset");
        card.removeAttribute("data-aos-delay");
        card.removeAttribute("data-aos-duration");
        // card.classList.remove("aos-init");
        // card.classList.remove("aos-animate");
      } else {
        // card.classList.add("aos-init");
        // card.classList.add("aos-animate");
        if (index % 2 === 0) {
          card.setAttribute("data-aos", "fade-right");
        } else {
          card.setAttribute("data-aos", "fade-left");
        }
        card.setAttribute("data-aos-offset", "200");
        card.setAttribute("data-aos-delay", "50");
        card.setAttribute("data-aos-duration", "1000");
        props.aos.init({ once: true });
        props.aos.refreshHard();
      }
    });
  };
  const handleOptionClick = (optionName) => {
    let body = document.body;

    switch (optionName) {
      case "Bigger Text":
        setTextOption(true);
        if (textSize < 3) {
          adjustFontSize(document.body);
        }
        setTextSize(textSize === 0 ? 1 : textSize === 1 ? 2 : 3);
        if (textSize === 3) {
          setTextSize(0);
          setTextOption(false);
          adjustFontSize(document.body, true);
        }

        break;
      case "Big Cursor":
        setBigCursor(!bigCursor);
        document.documentElement.classList.toggle("custom-cursor");

        break;
      case "Readable Fonts":
        setReadableFont(!readableFont);
        body.classList.toggle("readable");

        break;
      case "Stop Animations":
        setPauseAnimation(!pauseAnimation);
        pauseUpdate();
        toggleAOSAttributes();

        break;
      case "Invert Colors":
        setInvertColor(!invertColor);
        setBrightness(false);
        setBrightnessStep(0);
        setContrast(false);
        setContrastStep(0);
        setGrayscale(false);

        if (!invertColor) {
          document.documentElement.classList.add("invert");
        } else {
          document.documentElement.classList.remove("invert");
        }
        document.documentElement.classList.remove(
          "bright-1",
          "bright-2",
          "grayscale",
          "contrast-1",
          "contrast-2"
        );

        break;
      case "Brightness":
        setBrightness(true);
        setBrightnessStep(
          brightnessStep === 0 ? 1 : brightnessStep === 1 ? 2 : 0
        );
        setInvertColor(false);

        setContrast(false);
        setContrastStep(0);
        setGrayscale(false);

        document.documentElement.classList.remove(
          "invert",
          "grayscale",
          "contrast-1",
          "contrast-2"
        );
        if (brightnessStep === 0) {
          document.documentElement.classList.add("bright-1");
        } else if (brightnessStep === 1) {
          document.documentElement.classList.remove("bright-1");
          document.documentElement.classList.add("bright-2");
        } else {
          document.documentElement.classList.remove(
            "bright-1",
            "bright-2",
            "invert",
            "contrast-1",
            "contrast-2"
          );
          setBrightness(false);
        }

        break;
      case "Contrast":
        setContrast(true);
        setContrastStep(contrastStep === 0 ? 1 : contrastStep === 1 ? 2 : 0);
        setInvertColor(false);
        setBrightness(false);
        setBrightnessStep(0);
        setGrayscale(false);

        document.documentElement.classList.remove(
          "invert",
          "grayscale",
          "bright-1",
          "bright-2"
        );
        if (contrastStep === 0) {
          document.documentElement.classList.add("contrast-1");
        } else if (contrastStep === 1) {
          document.documentElement.classList.remove("contrast-1");
          document.documentElement.classList.add("contrast-2");
        } else {
          document.documentElement.classList.remove(
            "contrast-1",
            "contrast-2",
            "invert",
            "grayscale",
            "bright-1",
            "bright-2"
          );
          setContrast(false);
        }

        break;
      case "Grayscale":
        setGrayscale(!grayscale);
        setInvertColor(false);
        setBrightness(false);
        setBrightnessStep(0);
        setContrast(false);
        setContrastStep(0);
        if (!grayscale) {
          document.documentElement.classList.add("grayscale");
        } else {
          document.documentElement.classList.remove("grayscale");
        }
        document.documentElement.classList.remove(
          "bright-1",
          "bright-2",
          "invert"
        );

        break;
      case "Reading Mask":
        setMask(!mask);
        break;
      case "Highlight links":
        setHighlight(!highlight);
        document.documentElement.classList.toggle("hilight-links");

        break;
      case "Reset":
        setTextOption(false);
        setTextSize(0);
        setBigCursor(false);
        setReadableFont(false);
        setPauseAnimation(false);
        setInvertColor(false);
        setBrightness(false);
        setBrightnessStep(0);
        setContrast(false);
        setContrastStep(0);
        setGrayscale(false);
        setMask(false);
        setHighlight(false);

        document.documentElement.classList.remove(
          "custom-cursor",
          "invert",
          "bright-1",
          "bright-2",
          "grayscale",
          "contrast-1",
          "contrast-2",
          "hilight-links"
        );
        body.classList.remove("readable");
        adjustFontSize(document.body, true);
        toggleAOSAttributes();
        pauseUpdate();

        break;
      default:
        break;
    }
  };
  const isOptionChosen = (optionName) => {
    switch (optionName) {
      case "Bigger Text":
        return textOption;
      case "Big Cursor":
        return bigCursor;
      case "Readable Fonts":
        return readableFont;
      case "Stop Animations":
        return pauseAnimation;
      case "Invert Colors":
        return invertColor;
      case "Brightness":
        return brightness;
      case "Grayscale":
        return grayscale;
      case "Contrast":
        return contrast;
      case "Reading Mask":
        return mask;
      case "Highlight links":
        return highlight;
      default:
        return false;
    }
  };
  const openTools = () => {
    setOpen(!open);
  };
  const toolOptions = [
    {
      name: "Content",
      options: [
        {
          name: "Bigger Text",
          icon: <MdOutlineTextFields />,
          func: () => handleOptionClick("Bigger Text"),
          progressSteps: 3,
          currentStep: textSize,
        },
        {
          name: "Big Cursor",
          icon: <FaMousePointer />,
          func: () => handleOptionClick("Big Cursor"),
        },
        {
          name: "Readable Fonts",
          icon: <RiFontSize />,
          func: () => handleOptionClick("Readable Fonts"),
        },
        {
          name: "Stop Animations",
          icon: <MdPauseCircle />,
          func: () => handleOptionClick("Stop Animations"),
        },
      ],
    },
    {
      name: "Color",
      options: [
        {
          name: "Invert Colors",
          icon: <MdInvertColors />,
          func: () => handleOptionClick("Invert Colors"),
        },
        {
          name: "Brightness",
          icon: <BsBrightnessAltHighFill />,
          func: () => handleOptionClick("Brightness"),
          progressSteps: 2,
          currentStep: brightnessStep,
        },
        {
          name: "Grayscale",
          icon: <IoInvertMode />,
          func: () => handleOptionClick("Grayscale"),
        },
        {
          name: "Contrast",
          icon: <IoContrast />,
          func: () => handleOptionClick("Contrast"),
          progressSteps: 2,
          currentStep: contrastStep,
        },
      ],
    },
    {
      name: "Navigation",
      options: [
        {
          name: "Reading Mask",
          icon: <BsTextareaResize />,
          func: () => handleOptionClick("Reading Mask"),
        },
        {
          name: "Highlight links",
          icon: <IoLinkSharp />,
          func: () => handleOptionClick("Highlight links"),
        },
      ],
    },
  ];
  function BarRenderer({ number, step }) {
    const bars = [];

    // Push the same icon component to the icons array based on the number
    for (let i = 1; i <= number; i++) {
      const color = step > 0 && i <= step ? "#35465e" : "#d0d9db";
      bars.push(<CgLoadbar key={i} color={color} />);
    }

    return <div>{bars}</div>;
  }
  return (
    <div>
      <div className="accessibility-btn">
        <FaUniversalAccess size={60} color="#34465e" onClick={openTools} />
      </div>
      {mask && <ReadingMask />}

      <div className="access-tools">
        <Toast show={open} onClose={openTools}>
          <Toast.Header>
            <span>Accessibility Tools</span>
          </Toast.Header>
          <Toast.Body>
            <div>
              {toolOptions.map((tool, indx) => {
                return (
                  <div className="" key={indx}>
                    <div className="tool-label">{tool.name}</div>
                    <div className="options">
                      {tool.options.map((option, index) => {
                        const optionClassName = isOptionChosen(option.name)
                          ? "chosen"
                          : "";

                        return (
                          <div
                            className={`option-item ${optionClassName} ${option.name.split(' ').join('-')}`}
                            key={index}
                            onClick={option.func}
                          >
                            <p>{option.name}</p>
                            {option.icon}
                            <br />
                            {option?.progressSteps && (
                              <BarRenderer
                                number={option.progressSteps}
                                step={option.currentStep}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </Toast.Body>
          <div className="toast-footer">
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleOptionClick("Reset")}
            >
              <GrPowerReset /> Reset Settings
            </Button>
          </div>
        </Toast>
      </div>
    </div>
  );
};

export default Accessibility;
