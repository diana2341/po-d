import { FaUniversalAccess } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
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
  const [isBodyHidden, setIsBodyHidden] = useState(false);

  const [focusedCategory, setFocusedCategory] = useState(null);
  // Function to handle blur on each accessability option

  const handleCategoryBlur = () => {
    setFocusedCategory(null);
  };
  // Function to handle focus on each accessability option

  const handleCategoryFocus = (categoryName) => {
    setFocusedCategory(categoryName);
  };
  // Function to handle focus on Toast.Header
  const handleHeaderFocus = () => {
    setIsBodyHidden(true);
  };
  const saveSettings = () => {
    localStorage.setItem(
      "accessibilitySettings",
      JSON.stringify({
        textSize: textSize,
        textOption: textOption,
        bigCursor: bigCursor,
        readableFont: readableFont,
        pauseAnimation: pauseAnimation,
        invertColor: invertColor,
        brightness: {
          isBright: brightness,
          brightnessStep: brightnessStep,
        },
        contrast: {
          isContrast: contrast,
          contrastStep: contrastStep,
        },
        grayscale: grayscale,
        readingMask: mask,
        highlightLinks: highlight,
      })
    );
  };
  // Function to handle blur on Toast.Header
  const handleHeaderBlur = () => {
    setIsBodyHidden(false);
  };
  useEffect(() => {
    setOpen(props.openAccess);
  }, [props.openAccess]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  useEffect(() => {
    // Focus on the close button when the toast opens
    if (open) {
      const closeBtn = document.querySelector(".access-tools .close");
      if (closeBtn) {
        document.querySelector(".sr-only").remove();
        closeBtn.setAttribute(
          "aria-label",
          "Accessability widget is open, press enter to close"
        );
        closeBtn.focus();
      }
      document.querySelector(".toast").removeAttribute("role");
    }
  }, [open, props.openAccess]);
  useEffect(() => {
    let body = document.body;
    const accessibilitySettings = JSON.parse(
      localStorage.getItem("accessibilitySettings")
    );

    if (accessibilitySettings) {
      setTextOption(accessibilitySettings.textOption);
      setTextSize(accessibilitySettings.textSize);
      setPauseAnimation(accessibilitySettings.pauseAnimation);
      toggleAOSAttributes();
      pauseUpdate(accessibilitySettings.pauseAnimation, false);
      setBigCursor(accessibilitySettings.bigCursor);
      setReadableFont(accessibilitySettings.readableFont);
      setInvertColor(accessibilitySettings.invertColor);
      setBrightness(accessibilitySettings.brightness.isBright);
      setBrightnessStep(accessibilitySettings.brightness.brightnessStep);
      setContrast(accessibilitySettings.contrast.isContrast);
      setContrastStep(accessibilitySettings.contrast.contrastStep);
      setGrayscale(accessibilitySettings.grayscale);
      setMask(accessibilitySettings.readingMask);
      setHighlight(accessibilitySettings.highlightLinks);
      if (highlight) {
        document.documentElement.classList.add("hilight-links");
      } else {
        document.documentElement.classList.remove("hilight-links");
      }
      if (contrastStep === 1 && contrast) {
        document.documentElement.classList.add("contrast-1");
      } else if (contrastStep === 2 && contrast) {
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
      }
      if (grayscale) {
        document.documentElement.classList.add("grayscale");
      } else {
        document.documentElement.classList.remove("grayscale");
      }
      if (readableFont) {
        body.classList.add("readable");
      } else {
        body.classList.remove("readable");
      }
      if (bigCursor) {
        document.documentElement.classList.add("custom-cursor");
      } else {
        document.documentElement.classList.remove("custom-cursor");
      }
      if (brightnessStep === 1 && brightness) {
        document.documentElement.classList.add("bright-1");
      } else if (brightnessStep === 2 && brightness) {
        document.documentElement.classList.remove("bright-1");
        document.documentElement.classList.add("bright-2");
      }
      if (accessibilitySettings.textOption) {
        setTimeout(()=>{
          adjustFontSize(
            document.body,
            false,
            accessibilitySettings.textSize,
            true
          );
        },[125])
       
      }
    }
  }, []);

  useEffect(() => {
    let body = document.body;

    saveSettings(); // Save settings whenever any option changes
    if (highlight) {
      document.documentElement.classList.add("hilight-links");
    } else {
      document.documentElement.classList.remove("hilight-links");
    }
    if (contrastStep === 1 && contrast) {
      document.documentElement.classList.add("contrast-1");
    } else if (contrastStep === 2 && contrast) {
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
    }
    if (grayscale) {
      document.documentElement.classList.add("grayscale");
    } else {
      document.documentElement.classList.remove("grayscale");
    }
    if (readableFont) {
      body.classList.add("readable");
    } else {
      body.classList.remove("readable");
    }
    if (bigCursor) {
      document.documentElement.classList.add("custom-cursor");
    } else {
      document.documentElement.classList.remove("custom-cursor");
    }
    if (invertColor) {
      document.documentElement.classList.add("invert");
    } else {
      document.documentElement.classList.remove("invert");
    }
    if (brightnessStep === 1 && brightness) {
      document.documentElement.classList.add("bright-1");
    } else if (brightnessStep === 2 && brightness) {
      document.documentElement.classList.remove("bright-1");
      document.documentElement.classList.add("bright-2");
    }

  }, [
    bigCursor,
    readableFont,
    invertColor,
    brightness,
    brightnessStep,
    contrast,
    contrastStep,
    grayscale,
    mask,
    highlight,
    textSize,
    textOption,
  ]);
  useEffect(()=>{
    saveSettings();
    pauseUpdate(pauseAnimation);
    toggleAOSAttributes();
  },[pauseAnimation])

  function adjustFontSize(element, reset, size, pageLoad) {
    if (element.nodeType === Node.ELEMENT_NODE && element.hasChildNodes()) {
      if (!element.classList.contains("access-tools")) {
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
              let amount = size === 1 ? 3 : size === 2 ? 6 : size === 3 ? 9 : 0;
              const newFontSize = reset
                ? currentFontSize - amount + "px"
                : pageLoad
                ? currentFontSize + amount + "px"
                : currentFontSize + 3 + "px"; // Increase by 3px
              element.style.fontSize = newFontSize;
            }
            break; // Only adjust the font size of the first text node
          } else {
            adjustFontSize(child, reset, size, pageLoad); // Recursively check child nodes
          }
        }
      }
    }
  }

  const pauseUpdate = (ispaused, isRestAction) => {
    if (!ispaused && isRestAction) return;
    const svgElements = document.querySelectorAll("svg");
    svgElements.forEach((svgElement) => {
      if (pauseAnimation) {
        // Pause the animation by pausing all animations
        svgElement.pauseAnimations();
        svgElement.classList.remove("animate");
      } else {
        // Resume the animation by unpausing all animations
        svgElement.unpauseAnimations();
        svgElement.classList.add("animate");
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
      } else {
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
          adjustFontSize(document.body, true, 3, false);
        }
        break;
      case "Big Cursor":
        setBigCursor(!bigCursor);

        break;
      case "Readable Fonts":
        setReadableFont(!readableFont);
        if (readableFont) {
          body.classList.add("readable");
        } else {
          body.classList.remove("readable");
        }
        break;
      case "Stop Animations":
        setPauseAnimation(!pauseAnimation);

        break;
      case "Invert Colors":
        setInvertColor(!invertColor);
        setBrightness(false);
        setBrightnessStep(0);
        setContrast(false);
        setContrastStep(0);
        setGrayscale(false);

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
        if (brightnessStep === 2) {
          document.documentElement.classList.remove(
            "bright-1",
            "bright-2",
            "invert",
            "contrast-1",
            "contrast-2"
          );
          setBrightness(false);
        }
        document.documentElement.classList.remove(
          "invert",
          "grayscale",
          "contrast-1",
          "contrast-2"
        );

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
        if (highlight) {
          document.documentElement.classList.add("hilight-links");
        } else {
          document.documentElement.classList.remove("hilight-links");
        }
        break;
      case "Reset":
        setTextOption(false);
        adjustFontSize(document.body, true, textSize);
        pauseUpdate(pauseAnimation, true);
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
        toggleAOSAttributes();
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

  const firstFocusableElementRef = useRef(null);
  function BarRenderer({ number, step }) {
    const bars = [];

    // Push the same icon component to the icons array based on the number
    for (let i = 1; i <= number; i++) {
      const color = step > 0 && i <= step ? "#35465e" : "#d0d9db";
      bars.push(<CgLoadbar key={i} color={color} />);
    }

    return <div>{bars}</div>;
  }
  let lastClickedElement = null;

  // Event listener for click events
  document.addEventListener("click", (event) => {
    // Store a reference to the clicked element
    lastClickedElement = event.target;
  });

  // Function to manage focus flow within the modal
  let previouslyFocusedElement = null;

  // Event listener to track focus
  document.addEventListener("focusin", (event) => {
    previouslyFocusedElement = event.target;
  });
  // Function to manage focus flow within the modal
  const handleKeyDown = (event) => {
    const focusableElements = document.querySelectorAll(
      ".access-tools .option-item"
    );
    const lastFocusableElement =
      focusableElements[focusableElements.length - 1];
    const resetButton = document.querySelector(".access-tools .reset-btn");
    // Handle Tab key press

    if (event.key === "Tab") {
      // If the last focusable element is focused and Tab is pressed, focus the reset button
      if (document.activeElement === lastFocusableElement && !event.shiftKey) {
        event.preventDefault();
        resetButton.focus();
        return;
      }
      // If the reset button is focused and Shift + Tab is pressed, focus the last focusable element
      else if (previouslyFocusedElement === resetButton) {
        const closeBtn = document.querySelector(".access-tools .toast-header");
        if (closeBtn) {
          closeBtn.focus();

          return;
        }
      } else if (document.activeElement === resetButton && event.shiftKey) {
        event.preventDefault();
        lastFocusableElement.focus();
        return;
      }

      if (
        lastClickedElement?.classList.contains("close") &&
        !previouslyFocusedElement.classList.contains("skip-link")
      ) {
        const focusableElement = document.querySelectorAll(".skip-link")[0];
        focusableElement.focus();
        lastClickedElement = null;
      }
    }
  };

  // Function to handle accessibility modal open/close
  const openTools = () => {
    if (open) {
      const closeBtn = document.querySelector(".access-tools .close");
      closeBtn?.setAttribute("aria-label", "Exiting widget");
    }

    setOpen(!open);
    props.setOpenAccess(!open);
  };

  return (
    <div>
      <div className="accessibility-btn">
        <FaUniversalAccess size={60} color="#34465e" onClick={openTools} />
      </div>
      {mask && <ReadingMask />}

      <div className="access-tools">
        <Toast show={open} onClose={openTools} role="dialog">
          <Toast.Header
            tabIndex="0"
            onFocus={handleHeaderFocus}
            onBlur={handleHeaderBlur}
          >
            <span role="heading" aria-hidden={isBodyHidden}>
              Accessibility Tools
            </span>
          </Toast.Header>
          <Toast.Body ref={firstFocusableElementRef} aria-hidden={isBodyHidden}>
            {toolOptions.map((tool, indx) => {
              return (
                <div className="" key={indx}>
                  <div className="tool-label" role="heading">
                    {tool.name}
                  </div>
                  <div className="options" aria-live="polite">
                    {tool.options.map((option, index) => {
                      const optionClassName = isOptionChosen(option.name)
                        ? "chosen"
                        : "";

                      return (
                        <button
                          className={`option-item ${optionClassName} ${option.name
                            .split(" ")
                            .join("-")}`}
                          key={index}
                          onClick={option.func}
                          aria-label={`${option.name}`}
                          aria-hidden={
                            focusedCategory === option.name ? false : true
                          } // Apply onFocus here
                          onFocus={() => handleCategoryFocus(option.name)}
                          onBlur={handleCategoryBlur} // Apply onBlur here
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
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </Toast.Body>
          <div className="toast-footer" aria-hidden={isBodyHidden}>
            <button
              variant="primary"
              size="lg"
              className="reset-btn"
              onClick={() => handleOptionClick("Reset")}
            >
              <GrPowerReset /> Reset Settings
            </button>
          </div>
        </Toast>
      </div>
    </div>
  );
};

export default Accessibility;
