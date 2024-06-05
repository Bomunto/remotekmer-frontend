import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface CookieCustomizationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (preferences: { [key: string]: boolean }) => void;
}

const CookieCustomizationModal: React.FC<CookieCustomizationModalProps> = ({ isOpen, onClose, onSave }) => {
    const [preferences, setPreferences] = useState({
        necessary: true,
        functional: false,
        analytics: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setPreferences({
            ...preferences,
            [name]: checked,
        });
    };

    const handleSave = () => {
        onSave(preferences);
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-lg w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
                <DialogHeader>
                    <DialogTitle>Personnaliser les préférences de consentement</DialogTitle>
                    <DialogDescription>
                        Nous utilisons des cookies pour vous aider à naviguer efficacement et à exécuter certaines fonctions. Vous trouverez ci-dessous des informations détaillées sur tous les cookies sous chaque catégorie de consentement.
                    </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="necessary">
                            <AccordionTrigger>Nécessaire</AccordionTrigger>
                            <AccordionContent>
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-700">Les cookies nécessaires sont requis pour activer les fonctionnalités de base de ce site.</p>
                                    <span className="text-green-500">Toujours actif</span>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="functional">
                            <AccordionTrigger>Fonctionnel</AccordionTrigger>
                            <AccordionContent>
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-700">Les cookies fonctionnels aident à exécuter certaines fonctionnalités telles que le partage du contenu du site Web sur les plateformes de réseaux sociaux.</p>
                                    <input
                                        type="checkbox"
                                        name="functional"
                                        checked={preferences.functional}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="analytics">
                            <AccordionTrigger>Analytique</AccordionTrigger>
                            <AccordionContent>
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-700">Les cookies analytiques sont utilisés pour comprendre comment les visiteurs interagissent avec le site Web.</p>
                                    <input
                                        type="checkbox"
                                        name="analytics"
                                        checked={preferences.analytics}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="mt-6 flex justify-between space-x-2">
                    <Button variant="outline" onClick={onClose}>Tout rejeter</Button>
                    <Button onClick={handleSave}>Enregistrer mes préférences</Button>
                    <Button onClick={() => { handleSave(); }}>Accepter tout</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CookieCustomizationModal;
