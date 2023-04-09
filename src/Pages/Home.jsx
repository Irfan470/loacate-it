import { async } from "@firebase/util";
import {
  collection,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListingItem from "../components/ListingItem";
import Slider from "../components/Slider";
import { db } from "../firebase";

export default function Home() {
  const [gymListing, setGymListing] = useState(null);
  const [picnicListing, setPicnicListing] = useState(null);

  useEffect(() => {
    async function fetchListings() {
      try {
        const listingsRef = collection(db, "listings");
        const q = query(
          listingsRef,
          where("type", "==", "outdoorGym"),
          orderBy("timestamp", "desc"),
          limit(4)
        );
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setGymListing(listings);
        console.log(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, []);
  useEffect(() => {
    async function fetchListings() {
      try {
        const listingsRef = collection(db, "listings");
        const q = query(
          listingsRef,
          where("type", "==", "picnicSpot"),
          orderBy("timestamp", "desc"),
          limit(4)
        );
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setPicnicListing(listings);
        console.log(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, []);
  return (
    <div>
      <Slider />
      <div>
        {gymListing && gymListing.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3  text-2xl mt-6 font-semibold">
              Recent Gym Listings
            </h2>
            <Link to="/outdoor-gyms">
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
                Show more Listings
              </p>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {gymListing.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
          </div>
        )}
        {picnicListing && picnicListing.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold">
              Recent Picnic Listings
            </h2>
            <Link to="/picnic-spots">
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
                Show more Listings
              </p>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {picnicListing.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="text-center ">
        <div class="contact-me">
          <a class="btn " href="mailto:irfan_chemengr@ymail.com">
            CONTACT
          </a>
        </div>
        <div class="bottom-container">
          <a class="footer-link" href="https://www.facebook.com">
            Facebook
          </a>
          <a class="footer-link" href="https://twitter.com/irfan_n47">
            Twitter
          </a>
          <a class="footer-link" href="https://instagram.com">
            Instagram
          </a>
          <p class="copy">©IrfanCodes</p>
        </div>
      </div>
    </div>
  );
}
