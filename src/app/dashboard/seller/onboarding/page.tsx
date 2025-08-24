/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import SkipNavBar from '../Components/SkipNavBar';
import { createClient } from '@/lib/supabase/clients';

const KYBIntroScreen = () => {
  const router = useRouter();
  const supabase = createClient();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch seller profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);

        // Get current user
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError) throw userError;
        if (!user) {
          setError('User not logged in');
          setLoading(false);
          return;
        }

        // Fetch seller profile from table `sellers`
        const { data, error } = await supabase
          .from('sellers') // Change table name if different
          .select('*')
          .eq('id', user.id)
          .single();

        if (error) throw error;

        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [supabase]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Loading profile...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div
      className="bg-black text-white px-4 h-screen"
      style={{
        backgroundImage: 'url(/images/Wrapper.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <SkipNavBar />
      {profile?.business_type === 'individual' ? (
        <KYBUnregisterCard />
      ) : (
        <KYBRegisterCard />
      )}
    </div>
  );
};

export default KYBIntroScreen;

/* ------------------------- Unregistered Vendor Card ------------------------- */
const KYBUnregisterCard = () => {
  const router = useRouter();
  return (
    <Card className="bg-[#2C2C2C] w-full max-w-md rounded-xl shadow-lg text-center py-8 px-6 border-0 mx-auto mt-8">
      <CardContent>
        <div className="flex justify-start mb-4">
          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
            <span>
              <img src="/images/Group 84.png" alt="Logo" className="w-4 h-4" />
            </span>
          </div>
        </div>
        <h2 className="text-lg font-semibold mb-2 text-white text-start">
          Plugin Vendor KYB Onboarding Form
        </h2>
        <p className="text-sm text-gray-300 mb-4 text-start">
          Please fill out every section of this form with accurate information.
        </p>
        <div className="text-sm text-gray-300 text-left mb-6">
          To successfully onboard as a vendor on Plugin, ensure you provide the
          documents as requested.
        </div>
        <Button
          className="bg-yellow-500 text-black w-full font-semibold py-2 rounded-md hover:bg-yellow-600"
          onClick={() =>
            router.push('/dashboard/seller/onboarding/kyb-form')
          }
        >
          Get started
        </Button>
      </CardContent>
    </Card>
  );
};

/* --------------------------- Registered Vendor Card -------------------------- */
const KYBRegisterCard = () => {
  const router = useRouter();
  return (
    <Card className="bg-[#2C2C2C] w-full max-w-md rounded-xl shadow-lg text-center py-8 px-6 mx-auto border-0 mt-8">
      <CardContent>
        <div className="flex justify-start mb-4">
          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
            <span>
              <img src="/images/Group 84.png" alt="Logo" className="w-4 h-4" />
            </span>
          </div>
        </div>
        <h2 className="text-lg font-semibold mb-2 text-white text-start">
          Plugin Vendor KYB Onboarding Form
        </h2>
        <p className="text-sm text-gray-300 mb-4 text-start">
          Please fill out every section of this form with accurate information.
        </p>
        <div className="text-sm text-gray-300 text-left mb-6">
          To successfully onboard as a vendor on Plugin, ensure you provide the
          following details:
          <ul className="list-disc list-inside mt-2">
            <li>Company/Business registration documents</li>
            <li>Proof of address</li>
            <li>ID documents of your directors and shareholders</li>
          </ul>
        </div>
        <Button
          className="bg-yellow-500 text-black w-full font-semibold py-2 rounded-md hover:bg-yellow-600"
          onClick={() =>
            router.push('/dashboard/seller/onboarding/kyb-form')
          }
        >
          Get started
        </Button>
      </CardContent>
    </Card>
  );
};
