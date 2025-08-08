"use client";
import Image from "next/image";

import { useState, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion, easeOut, easeIn } from "framer-motion";
import { url } from "inspector";
import { urlToHttpOptions } from "url";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Typical breakpoint for mobile
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);



  // Animation variants
  const fadeInDown = {
    initial: { opacity: 0, y: -40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: easeOut },
  };
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: easeOut },
  };
  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: easeOut },
  };
  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: easeOut },
  };
  const zoomIn = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: easeOut },
  };
  const fadeInUpDelay = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: easeOut, delay: 0.3 },
  };
  const fadeInUpSpring = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { type: "spring", stiffness: 80, damping: 14 },
  };
  const fadeInRotate = {
    initial: { opacity: 0, rotate: -8, y: 40 },
    whileInView: { opacity: 1, rotate: 0, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: easeOut },
  };
  const staggerContainer = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { staggerChildren: 0.15, duration: 0.7, ease: easeOut },
  };

  const weddingContent = (
    <div className="p-8 space-y-12">
      {/* Hero Section */}       

      <motion.section className="text-center" {...fadeInUp}>
        <div className="flex flex-col items-center">
        <div className="my-10 flex items-center justify-center">
          <Image
            src="/final-images/heart-3.png"
            alt="heart"
            width={400}
            height={100}
            className="w-full h-20 object-cover object-center rounded-lg"
            onContextMenu={(e) => e.preventDefault()}
            priority
          />
        </div>
          <h1 className="text-5xl font-extrabold text-emerald-600 mb-4 fancy-font my-8">Our Wedding!</h1>
        </div>
        <p className="mt-4 text-lg italic Edu-font">
          Join us in happiness, laughter, and light!
          <br />
          It’s a feast of love, a fabulous delight
          <br />
          and you, my dear friend, 
          <br />
          Make it just right!
        </p>
        <div className="my-0">
          <Image
            src="/final-images/engagement-final-2.png"
            alt="Ghibli-style wedding image"
            width={500}
            height={500}
            className="scale-90 object-cover"
            onContextMenu={(e) => e.preventDefault()}
            priority
          />
        </div>
        {/* Supposed to float above the first image
        <div className="flex flex-col items-center text-sm my-4 space-y-2">
          <span>🍷 “Come support the couple!”</span>
          <span>🍽️ “Let’s feast together!”</span>
          <span>🥂 “Cheers to a thousand toasts!”</span>
        </div>
        */}
      </motion.section>

      {/* Invitation Section */}
      <motion.section className="text-center" {...fadeInUp}>
        <div className="flex flex-col items-center leading-relaxed gap-2 overflow-visible">
          {/* Groom */}
          <p className="text-3xl meaculpa-font tracking-wider font-semibold text-center 
                        bg-gradient-to-r from-black via-[#c6a801] to-[#ffdc3e] 
                        bg-clip-text text-transparent leading-[1.8] pt-2 pb-2 px-2 
                        overflow-visible inline-block">
            Eshwar K.&nbsp;Manasijan
            <br />
            Tejashwini H
          </p>
        </div>

          <p className="text-lg italic Edu-font">
          <br />
          In this lifetime, what a joy it’s been
          <br />
          for paths we have crossed
          <br />
          and the conversations we have shared,
          <br />
          we warmly invite you
          <br />
          and those you hold dear
          <br />
          It’s been a while so let this day be,
          <br />
          to witness our vows and bring us cheer
          <br />
          a sweet reunion indeed!
        </p>
      </motion.section>

      {/* Schedule Section */}
      <motion.section {...fadeInUp}>
        <h2 className="text-2xl font-bold text-center mb-4 my-3">THE EXALTED DAYS</h2>
          <div className="my-10">
            <Image
            src="/final-images/schedule.png"
            alt="Exalted Days"
            width={300}
            height={380}
            className="scale-110"
            priority
            />
          </div>
        </motion.section>

      {/* Poem Section */}
      <motion.section className="text-center italic text-lg Edu-font" {...fadeInUp}>
        <p>
          A wedding promise both gentle and grand,
          <br />
          Not born of chance, but shaped by hand
          <br />
          Hearts entwined beneath the stars above,
          <br />
          Held in the harmony of eternal love
        </p>
      </motion.section>

      {/* Image and Quote Section */}
      <motion.section className="text-center" {...fadeInUp}>
        <div className="relative my-6">
          <Image
            src="/final-images/forest-final.png"
            alt="Ghibli-style wedding image"
            width={400}
            height={200}
            className="w-full h-48 object-cover object-[center_80%] rounded-lg shadow-lg border border-emerald-200"
            onContextMenu={(e) => e.preventDefault()}
            priority
          />
          {/* Vignette overlay */}
          <div className="absolute inset-0 rounded-lg pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(246,240,213,0) 50%, rgba(246,240,213,0.8) 100%)'
              }}>
          </div>
        </div>

        <p className="italic text-lg Edu-font">
          We met through life
          <br />
          not guided, not planned,
          <br />
          no signs, no seeking
          <br />
          with souls intertwined
          <br />
          <strong>My forever begins with you</strong>
        </p>
      </motion.section>

        {/* Line */}
        <div className="flex items-center justify-center">
        <Image
          src="/final-images/line.png"
          alt="Ghibli-style wedding image"
          width={200}
          height={200}
          className="scale-90 w-full h-12 object-cover object-[center]"
          onContextMenu={(e) => e.preventDefault()}
          priority
        />
        </div>

      {/* Gift Registry Section - fade in each subsection */}
      <motion.section className="text-sm" {...staggerContainer}>
        <motion.h2 className="text-2xl font-bold text-center mb-4" {...fadeInUp}>GIFT REGISTRY</motion.h2>
        <div className="text-left space-y-6 leading-relaxed">
          <motion.p className="text-base Edu-font text-justify space-y-10 leading-[1.8]" {...fadeInUp}>
            Dear Family &amp; Friends,<br />
            &emsp;&emsp;Your presence is the most precious gift we could ask for, and if you wish to bless us with something extra, we&apos;ve put together a thoughtful gift registry. 
            <br />&emsp;&emsp;Each option is meaningful to us, rooted in tradition, growth, and heartfelt memories.
            <br />Feel free to choose what resonates most with you.
          </motion.p>
          <motion.div {...fadeInUp}>
            <h3 className="text-lg font-semibold mb-1 leading-[1.8]">Gift with Tradition</h3>
            <p className="text-base Edu-font text-justify leading-[1.8]">&emsp;&emsp;If you prefer to bless us with a precious metal or cash gift, we deeply appreciate it. You can do so during the event.</p>
          </motion.div>
          <motion.div {...fadeInUp}>
            <h3 className="text-lg font-semibold mb-1">Invest in Us</h3>
            <p className="Edu-font text-base">Digital Bullion:</p>
            <ul className="list-disc list-inside ml-4 Edu-font text-base leading-[1.8]">
              <li><a href="https://www.caratlane.com/caratlane-digital-gold?srsltid=AfmBOoqcyKK0Gh8cFi2qbf8CT1CH1SLzQ5U7-dBGOZfXxhNl6U5C7JGw" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Click here to gift digital gold</a></li>
            </ul>
          </motion.div>
          <motion.div {...fadeInUp}>
            <h3 className="text-lg font-semibold mb-1">Gift from the Heart</h3>
            <p className="Edu-font text-base">Share your blessings & memories!</p>
            <input
              type="text"
              id="gift-message-name"
              name="gift-message-name"
              className="mt-1 block w-full px-2 py-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Your name (optional)"
            />
            <textarea
              id="message"
              name="message"
              className="mt-1 block w-full px-2 py-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
              rows={3}
              placeholder="Your message..."
            ></textarea>
            <div className="flex justify-end text-right pt-2">
              <button
                type="button"
                onClick={() => {
                  const nameInput = document.getElementById("gift-message-name") as HTMLInputElement;
                  const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : "Anonymous";
                  const message = (document.getElementById("message") as HTMLTextAreaElement).value;
                  const promise = fetch("/api/rsvp", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      name,
                      telephone: "N/A",
                      pax: 0,
                      message,
                    }),
                  }).then((res) => {
                    if (!res.ok) {
                      throw new Error("Failed to send message.");
                    }
                    return res.json();
                  });

                  toast.promise(promise, {
                    loading: "Sending message...",
                    success: () => {
                      (document.getElementById("message") as HTMLTextAreaElement).value = "";
                      if (nameInput) nameInput.value = "";
                      return "Message sent successfully!";
                    },
                    error: "Failed to send message.",
                  });
                }}
                className="text-white flex items-center justify-center text-sm tracking-widest text-center whitespace-normal px-4 py-3 min-w-[80px] h-8 rounded-full bg-[#3c9e5e] hover:bg-[#2b7445] transition-colors duration-300">
                Send
              </button>
            </div>
          </motion.div>
          <motion.div {...fadeInUp}>
            <h3 className="text-lg Edu-font font-semibold mb-1 leading-[1.8]">Something Personal or Handmade?</h3>
            <p className="text-base text-justify Edu-font leading-[1.8]">Got something handmade, heartfelt, or meaningful? We would be honored to receive it as your love will always have a place in our hearts and home.</p>
          
          {/* Map Section */}
              <motion.section className="text-center" {...zoomIn}>
                <p className="mb-2 text-sm my-6">[Tap or click the map for navigation ↓]</p>
                <a
                  href="https://maps.app.goo.gl/FYigzzmmvCuAaLpa6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block my-6"
                >
                  <Image
                    src="/hand-drawn-map.png"
                    alt="Hand-drawn map to venue"
                    width={256}
                    height={256}
                    className="w-64 h-64 object-contain rounded-full shadow-lg cursor-pointer border-2 border-emerald-300 mx-auto"
                    style={{ background: '#fff' }}
                    priority
                  />
                </a>
              </motion.section>

              {/* Second Poem Section */}
              <motion.section className="text-center italic text-lg Edu-font my-3" {...fadeInUp}>
                <p>
                  True, gentle, fated, and timeless
                  <br />
                  the day that turns you and me into us
                  <br />
                  Where the hands we hold today
                  <br />
                  will be held all tomorrows
                  <br />
                  echoing our love forever
                </p>
              </motion.section>

              {/* RSVP Section */}
              <motion.section {...fadeInUp}>
                <h2 className="text-4xl font-bold text-center fancy-font mb-4 my-10">Repondez s&apos;il Vous Plait</h2>
                <form
                  className="space-y-4 text-sm"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                    const telephone = (form.elements.namedItem("telephone") as HTMLInputElement).value;
                    const pax = (form.elements.namedItem("pax") as HTMLInputElement).value;

                    const promise = fetch("/api/rsvp", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ name, telephone, pax: parseInt(pax) }),
                    }).then((res) => {
                      if (!res.ok) {
                        throw new Error("Failed to submit RSVP.");
                      }
                      return res.json();
                    });

                    toast.promise(promise, {
                      loading: "Submitting RSVP...",
                      success: () => {
                        form.reset();
                        return "RSVP submitted successfully!";
                      },
                      error: "Failed to submit RSVP.",
                    });
                  }}
                >
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" className="mt-1 block w-full px-2 py-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"/>
                  </div>
                  <div>
                    <label htmlFor="telephone" className="block text-xs font-medium text-gray-700">Telephone</label>
                    <input type="tel" id="telephone" name="telephone" className="mt-1 block w-full px-2 py-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"/>
                  </div>
                  <div>
                    <label htmlFor="pax" className="block text-xs font-medium text-gray-700">No. of people:</label>
                    <input type="number" id="pax" name="pax" min="1" className="mt-1 block w-full px-2 py-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"/>
                  </div>
                  <p className="text-center mb-4 text-xs"><br></br>Kindly RSVP by Nov 1st, 2025</p>
                  <div className="text-center pt-2">
                    <button type="submit" className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#3c9e5e] hover:bg-[#2b7445] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                      RSVP Now
                    </button>
                  </div>
                </form>
              </motion.section>
                <div
                  className="p-6 my-8 bg-transparent object-fill text-center max-w-xl mx-auto"
                  style={{
                    borderWidth: '16px 28px',
                    borderStyle: 'solid',
                    borderColor: 'transparent',
                    borderImageSource: 'url(/final-images/textbox.png)',
                    borderImageSlice: '80 150',
                    borderImageRepeat: 'round'
                  }}
                >

                <motion.p
                  className="text-base text-justify Edu-font leading-[1.8]"
                  {...fadeInUp}
                >
                  Thank you for being a part of this beautiful journey with us. Whether it’s
                  your blessings, your presence, or a thoughtful contribution, we are truly
                  grateful. This celebration is as much about family and friendship as it is
                  about the two of us, and we feel elated to share this moment with you!
                </motion.p>
              </div>
              
                <motion.div className="text-4xl text-center font-semibold text-md meaculpa-font tracking-wider leading-[1.8] mt-6" {...fadeInUp}>
                  {/* Salutations */}
                  <div className="flex items-center justify-center">
                  <Image
                    src="/final-images/mr-mrs.png"
                    alt="Ghibli-style wedding image"
                    width={200}
                    height={200}
                    className="scale-75 w-full h-32 object-cover object-[center]"
                    onContextMenu={(e) => e.preventDefault()}
                    priority
                  />
                  </div>
                </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );

  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen p-4"
      style={{
        backgroundImage: 'url(https://i.pinimg.com/1200x/c0/a4/7a/c0a47aac651b602e2db89164dcadd952.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(255,255,255,0.2)',
          zIndex: 0,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <Toaster />
        {isMobile ? (
          <div className="no-scrollbar overflow-y-auto scrollbar-hide h-screen w-full bg-lime-50 font-serif text-gray-800">
            {weddingContent}
          </div>
        ) : (
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[800px] w-[400px] shadow-xl">
            <div className="w-[140px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
              <div
                className="rounded-[2rem] no-scrollbar overflow-y-auto scrollbar-hide h-full font-serif text-gray-800"
                style={{
                  backgroundImage: "url(https://i.pinimg.com/736x/d7/77/37/d77737cae1098d5453573c53250f0d1c.jpg)",
                  backgroundRepeat: "repeat-y",
                  backgroundSize: "100% auto",
                  backgroundPosition: "top center",
                  position: "relative",
                }}
              >
              {weddingContent}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
