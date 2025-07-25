"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

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

  const weddingContent = (
    <div className="p-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-emerald-600 mb-4">Our Wedding</h1>
        <p className="text-md italic">
          Raise your glasses, Join us in happiness, laughter, and light!
          <br />
          It’s a feast of love, a fabulous delight— And you, my dear friend, make it just right.
        </p>
        <div className="my-6">
          <div className="w-full h-48 bg-green-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-sm">Ghibli-style image</span>
          </div>
        </div>
        <div className="flex flex-col items-center text-sm my-4 space-y-2">
          <span>🍷 “Come support the couple!”</span>
          <span>🍽️ “Let’s feast together!”</span>
          <span>🥂 “Cheers to a thousand toasts!”</span>
        </div>
        <p className="text-xl font-semibold text-emerald-600">
          ESHWAR K MANASIJAN 💖 TEJASHWINI HARISH
        </p>
      </section>

      {/* Invitation Section */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">- INVITATION -</h2>
        <div className="flex justify-center items-center space-x-2 my-4">
          <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center"><span className="text-gray-500 text-xs">Groom</span></div>
            <span className="text-3xl">🌸</span>
          <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center"><span className="text-gray-500 text-xs">Bride</span></div>
        </div>
        <p className="text-md italic">
          💌
          <br />
          In this lifetime, what a joy it’s been
          <br />
          for paths we have crossed and the conversations we have shared
          <br />
          we warmly invite you and those you hold dear
          <br />
          It’s been a while so let this day be,
          <br />
          to witness our vows and bring us cheer
          <br />
          a sweet reunion indeed.
        </p>
      </section>

      {/* Schedule Section */}
      <section>
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
      </section>

      {/* ... more sections ... */}
       <section className="text-center italic text-md">
              <p>
                A wedding promise both gentle and grand,
                <br />
                Not born of chance, but shaped by hand.
                <br />
                Hearts entwined beneath the stars above,
                <br />
                Held in the harmony of eternal love.
              </p>
            </section>

            {/* Map Section */}
            <section className="text-center">
                <p className="mb-2 text-sm">[Click map for navigation↓]</p>
                {/* Placeholder for Map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1942.8048368218504!2d77.55069544663627!3d13.123895771301079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae23065976ae59%3A0xae11679cdf28877f!2sSamavana!5e0!3m2!1sen!2sin!4v1753374008739!5m2!1sen!2sin"
                  className="w-full h-64 rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>

            {/* Second Poem Section */}
            <section className="text-center italic text-md">
                <p>
                    True, gentle, fated, and timeless —
                    <br />
                    this is the day that turns you and me into us.
                    <br />
                    Where the hands we hold today
                    <br />
                    will be held all tomorrows
                    <br />
                    echoing our love forever.
                </p>
            </section>

            {/* RSVP Section */}
            <section>
                <h2 className="text-2xl font-bold text-center mb-4">RSVP</h2>
                <p className="text-center mb-4 text-sm">Kindly RSVP by Nov 1st, 2025</p>
                <form
                  className="space-y-3 text-sm"
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
                    <div className="text-center pt-2">
                        <button type="submit" className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                          RSVP Now
                        </button>
                    </div>
                </form>
            </section>

            {/* Image and Quote Section */}
            <section className="text-center">
                <div className="my-6">
                    {/* Placeholder for another image */}
                    <div className="w-full h-32 bg-green-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Image Placeholder</span>
                    </div>
                </div>
                <p className="italic text-md">
                    We met through life—
                    <br />
                    not guided, not planned,
                    <br />
                    no signs, no seeking
                    <br />
                    with souls intertwined
                    <br />
                    My forever begins you
                </p>
            </section>

            {/* Gift Registry Section */}
            <section className="text-sm">
                <h2 className="text-2xl font-bold text-center mb-4">GIFT REGISTRY</h2>
                <div className="text-left space-y-4">
                    <p>Your presence is the most precious gift. But if you wish to bless us, we&apos;ve put together a registry.</p>
                    
                    <div>
                        <h3 className="text-lg font-semibold mb-1">Invest in Us</h3>
                        <p>Digital gifting (gold):</p>
                        <ul className="list-disc list-inside ml-4 text-xs">
                            <li>Register on a site of your choice.</li>
                            <li>Go to the gifting section.</li>
                            <li>Use recipient address: 7550334997</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-1">Gift with Tradition</h3>
                        <p>Precious metal or cash gifts are deeply appreciated at the event.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-1">Gift from the Heart</h3>
                      <p>Share your blessings & memories.</p>
                      <textarea
                        id="message"
                        name="message"
                        className="mt-1 block w-full px-2 py-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                        rows={3}
                        placeholder="Your message..."
                      ></textarea>
                      <div className="text-right pt-2">
                        <button
                          type="button"
                          onClick={() => {
                            const message = (document.getElementById("message") as HTMLTextAreaElement).value;
                            const promise = fetch("/api/rsvp", {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({
                                name: "Anonymous",
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
                                return "Message sent successfully!";
                              },
                              error: "Failed to send message.",
                            });
                          }}
                          className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                        >
                          Send
                        </button>
                      </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-1">Something Personal?</h3>
                        <p>Handmade or special gifts are welcome!</p>
                    </div>

                    <p className="text-center pt-4">Thank you for being part of our journey. Your support means everything.</p>

                    <p className="text-center font-semibold text-md">
                        With love,
                        <br/>
                        The-soon-to-be Mister and Missus
                    </p>
                </div>
            </section>
    </div>
  );

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-4">
      <Toaster />
      {isMobile ? (
        <div className="no-scrollbar overflow-y-auto scrollbar-hide h-screen w-full bg-lime-50 font-serif text-gray-800">
          {weddingContent}
        </div>
      ) : (
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[800px] w-[400px] shadow-xl">
          <div className="w-[140px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
          <div className="rounded-[2rem] no-scrollbar overflow-y-auto scrollbar-hide h-full bg-lime-50 font-serif text-gray-800">
            {weddingContent}
          </div>
        </div>
      )}
    </main>
  );
}
