"use client";
import Image from "next/image";

import { useState, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion, easeOut, easeIn } from "framer-motion";

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
      <motion.section className="text-center" {...fadeInDown}>
        <div className="flex flex-col items-center">
          <Image
            src="/final-images/foot-final.png"
            alt="Wedding Image"
            width={150}
            height={150}
            className="mt-4 mb-4 w-full object-cover border-emerald-300"
            onContextMenu={(e) => e.preventDefault()}
            priority
          />
          <h1 className="text-5xl font-extrabold text-emerald-600 mb-4 mt-4 fancy-font">Our Wedding!</h1>
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
            src="/final-images/engagement-final.png"
            alt="Ghibli-style wedding image"
            width={500}
            height={500}
            className="scale-90 object-cover rounded-lg shadow-lg border border-emerald-200"
            onContextMenu={(e) => e.preventDefault()}
            priority
          />
        </div>
        {/*
        <div className="flex flex-col items-center text-sm my-4 space-y-2">
          <span>🍷 “Come support the couple!”</span>
          <span>🍽️ “Let’s feast together!”</span>
          <span>🥂 “Cheers to a thousand toasts!”</span>
        </div>
        */}
      </motion.section>

      {/* Invitation Section */}
      <motion.section className="text-center" {...fadeInUp}>
        <div className="flex flex-col my-6">
          {/* Groom */}
          <div className="flex flex-col items-start leading-relaxed mb-6">
            <p className="text-3xl BeauRivage-font tracking-wider font-semibold text-emerald-700 text-left">
              Eshwar K Manasijan
            </p>
          </div>
          
          {/* Heart */}
          <span className="text-3xl px-2 my-0">❤️</span>

          {/* Bride */}
            <div className="flex flex-col items-end leading-relaxed mt-6">
              <p className="text-3xl BeauRivage-font tracking-wider font-semibold text-emerald-700 text-center">
                Tejashwini Harish
              </p>
            </div>
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
      <motion.section {...fadeInLeft}>
        <h2 className="text-2xl font-bold text-center mb-4">THE EXALTED DAYS</h2>
          <div className="grid grid-cols-1 gap-6 text-sm">
          <div className="border-l-4 border-emerald-300 pl-4">
          <h3 className="text-xl font-semibold mb-2">15th November</h3>
            <ul className="space-y-1">
              <li><span className="font-bold">04:00pm</span> - Onset of the event</li>
              <li><span className="font-bold">04:45pm - 05:45pm</span> - Engagement</li>
              <li><span className="font-bold">6.00pm</span> – Reception</li>
              <li><span className="font-bold">7:00 pm</span> – Celebration Banquet</li>
            </ul>
          </div>
          <div className="border-l-4 border-emerald-300 pl-4">
            <h3 className="text-xl font-semibold mb-2">16th November</h3>
            <ul className="space-y-1">
              <li><span className="font-bold">From 07:45</span> - Breakfast</li>
              <li><span className="font-bold">10:45 am - 11:45 am</span> – Muhurtham <span className="text-xs text-gray-500">(wedding time)</span></li>
              <li><span className="font-bold">12:30</span> – Lunch</li>
            </ul>
          </div>
        </div>
      </motion.section>

{/* Calendar Image Section
      <div className="flex justify-center my-6">
        <Image
          src="/final-images/calendar.png"
          alt="November 2025 Wedding Calendar"
          width={300}
          height={380}
          className="scale-90 rounded-lg shadow-lg border border-emerald-200"
          priority
        />
      </div>
 */}
      {/* Poem Section */}
      <motion.section className="text-center italic text-lg Edu-font" {...fadeInRight}>
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
      <motion.section className="text-center" {...fadeInRight}>
        <div className="my-6">
          <Image
            src="/ghibli_2.png"
            alt="Ghibli-style wedding image"
            width={400}
            height={128}
            className="w-full h-32 object-cover rounded-lg shadow-lg border border-emerald-200"
            onContextMenu={(e) => e.preventDefault()}
            priority
          />
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

      {/* Gift Registry Section - fade in each subsection */}
      <motion.section className="text-sm" {...staggerContainer}>
        <motion.h2 className="text-2xl font-bold text-center mb-4" {...fadeInRight}>GIFT REGISTRY</motion.h2>
        <div className="text-left space-y-6 leading-relaxed">
          <motion.p className="text-base text-justify space-y-10 leading-[1.8]" {...fadeInRight}>
            Dear Family &amp; Friends,<br />
            &emsp;&emsp;Your presence is the most precious gift we could ask for, and if you wish to bless us with something extra, we&apos;ve put together a thoughtful gift registry. 
            <br />&emsp;&emsp;Each option is meaningful to us, rooted in tradition, growth, and heartfelt memories.
            <br />Feel free to choose what resonates most with you.
          </motion.p>
          <motion.div {...fadeInRight}>
            <h3 className="text-lg font-semibold mb-1 leading-[1.8]">Gift with Tradition</h3>
            <p className="text-base text-justify leading-[1.8]">&emsp;&emsp;If you prefer to bless us with a precious metal or cash gift, we deeply appreciate it. You can hand it over during the event.</p>
          </motion.div>
          <motion.div {...fadeInRight}>
            <h3 className="text-lg font-semibold mb-1">Invest in Us</h3>
            <p className="text-base">Digital Bullion:</p>
            <ul className="list-disc list-inside ml-4 text-base leading-[1.8]">
              <li><a href="https://www.caratlane.com/caratlane-digital-gold?srsltid=AfmBOoqcyKK0Gh8cFi2qbf8CT1CH1SLzQ5U7-dBGOZfXxhNl6U5C7JGw" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Click here to gift digital gold</a></li>
              <li><a href="https://www.youtube.com/watch?v=IxX_QHay02M&list=RDIxX_QHay02M&start_radio=1">Please click the link below</a></li>
            </ul>
          </motion.div>
          <motion.div {...fadeInRight}>
            <h3 className="text-lg font-semibold mb-1">Gift from the Heart</h3>
            <p className="text-base">Share your blessings & memories!</p>
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
          <motion.div {...fadeInRight}>
            <h3 className="text-lg Edu-font font-semibold mb-1 leading-[1.8]">Something Personal or Handmade?</h3>
            <p className="text-base text-justify Edu-font leading-[1.8]">Have something special, handmade, or meaningful? We’d love to receive it—there’s space in our hearts and home for all your love.</p>
          
          {/* Map Section */}
              <motion.section className="text-center" {...zoomIn}>
                <p className="mb-2 text-sm my-6">[Tap or click the map for navigation ↓]</p>
                <a
                  href="https://maps.app.goo.gl/FYigzzmmvCuAaLpa6"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-block'}}
                >
                  <Image
                    src="/hand-drawn-map.png"
                    alt="Hand-drawn map to venue"
                    width={350}
                    height={450}
                    className="w-64 h-64 object-contain rounded-lg shadow-lg cursor-pointer border-2 border-emerald-300 mx-auto"
                    style={{ background: '#fff' }}
                    priority
                  />
                </a>
              </motion.section>

              {/* Second Poem Section */}
              <motion.section className="text-center italic text-lg Edu-font my-3" {...fadeInRight}>
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
              <motion.section {...fadeInRight}>
                <h2 className="text-4xl font-bold text-center fancy-font mb-4 my-10">Repondez s'il Vous Plait</h2>
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
                    <button type="submit" className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                      RSVP Now
                    </button>
                  </div>
                </form>
              </motion.section>

                <motion.p className="text-base text-justify Edu-font pt-4 leading-[1.8]" {...fadeInRight}>
                  Thank you for being a part of this beautiful journey with us. Whether it’s your blessings, your presence, or a thoughtful contribution, we are truly grateful. This celebration is as much about family and friendship as it is about the two of us.
                </motion.p>
                <motion.p className="text-xl text-center font-semibold text-md Edu-font leading-[1.8] mt-6" {...fadeInRight}>
                  With love,<br />
                  The-soon-to-be Mister and Missus
                </motion.p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );

  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen p-4"
      style={{
        backgroundImage: 'url()',
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
                className="min-h-screen bg-repeat-y bg-top bg-[length:100%_auto]"
                style={{
                  backgroundImage: "url(https://i.pinimg.com/736x/06/b6/75/06b675d52c66d0c1af49fd4054d515a1.jpg)", // Change this to your actual path
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
