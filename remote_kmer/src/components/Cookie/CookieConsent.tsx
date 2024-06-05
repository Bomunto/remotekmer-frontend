'use client';

import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CookieCustomizationModal from '@/components/Cookie/CookieCustomizationModal';

const CookieConsent: React.FC = () => {
    const [cookies, setCookie] = useCookies(['userConsent']);
    const [visible, setVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (!cookies.userConsent) {
            setVisible(true);
        }
    }, [cookies]);

    const handleAcceptAll = () => {
        setCookie('userConsent', { necessary: true, analytics: true, marketing: true }, { path: '/', maxAge: 31536000 });
        setVisible(false);
    };

    const handleRejectAll = () => {
        setCookie('userConsent', { necessary: true, analytics: false, marketing: false }, { path: '/', maxAge: 31536000 });
        setVisible(false);
    };

    const handleCustomize = () => {
        setIsModalOpen(true);
    };

    const handleSavePreferences = (preferences: { [key: string]: boolean }) => {
        setCookie('userConsent', preferences, { path: '/', maxAge: 31536000 });
    };

    if (!visible) {
        return null;
    }

    return (
        <div className="fixed bottom-0 right-0 z-50 p-4 flex justify-center lg:justify-end w-full">
            <Card className="w-full max-w-2xl lg:max-w-md bg-white border border-gray-300 rounded-lg shadow-lg">
                <CardHeader className="text-center">
                    <CardTitle className="text-lg font-semibold">Nous valorisons votre vie privée</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-gray-600">Nous utilisons des cookies pour améliorer votre expérience de navigation, servir des annonces ou du contenu personnalisés et analyser notre trafic. En cliquant sur "Tout accepter", vous consentez à notre utilisation des cookies.</p>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 sm:space-x-2">
                    <Button onClick={handleRejectAll} variant="outline" className="w-full sm:w-auto">Tout rejeter</Button>
                    <Button onClick={handleCustomize} variant="outline" className="w-full sm:w-auto">Personnaliser</Button>
                    <Button onClick={handleAcceptAll} className="w-full sm:w-auto">Tout accepter</Button>
                </CardFooter>
            </Card>
            <CookieCustomizationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSavePreferences}
            />
        </div>
    );
};

export default CookieConsent;
