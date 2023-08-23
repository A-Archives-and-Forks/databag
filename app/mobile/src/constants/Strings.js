export function getLanguageId(language) {
  if (language === 'english') {
    return 0;
  }
  if (language === 'french') {
    return 1;
  }
  if (language === 'spanish') {
    return 2;
  }
  if (language === 'german') {
    return 3;
  }
  return 0; // default
};

export const Strings = [
  { 
    visibleRegistry: 'Visible in Rengistry',
    edit: 'Edit',
    enableNotifications: 'Enable Notifications',
    sealedTopics: 'Sealed Topics',
    colorMode: 'Color Mode',
    hourMode: 'Hour Format',
    language: 'Language',
    logout: 'Logout',
    changeLogin: 'Change Login',
    deleteAccount: 'Delete Account',
    contacts: 'Contacts',
    topics: 'Topics',
    messages: 'Messages',
    support: 'Support',
    blocked: 'Blocked',
    actions: 'Actions',
    display: 'Display',
    settings: 'Settings',
  },
  {
    visibleRegistry: 'Visible dans le Registre',
    edit: 'Modifier',
    enableNotifications: 'Activer les Notifications',
    sealedTopics: 'Sujets S�curis�s',
    colorMode: 'Mode de Couleur', 
    hourMode: 'Format d\'Heure',
    language: 'Langue',
    logout: 'Se D�connecter',
    changeLogin: 'Changer le Mot de Passe',
    deleteAccount: 'Supprimer le Compte',
    contacts: 'Contacts',
    topics: 'Sujets',
    messages: 'Messages',
    support: 'Aide',
    blocked: 'Supprim�',
    actions: 'Actions',
    display: '�cran',
    settings: 'Configuration',
  },
  {
    visibleRegistry: 'Visible en el Registro',
    edit: 'Editar',
    enableNotifications: 'Permitir Notificaciones', 
    sealedTopics: 'Temas Protegidos', 
    colorMode: 'Modo de Color',
    hourMode: 'Formato de Hora',
    language: 'Idioma',
    logout: 'Cerrar Sesi�n',
    changeLogin: 'Cambiar la contrase�a',
    deleteAccount: 'Borrar Cuenta',
    contacts: 'Contactos',
    topics: 'Temas',
    messages: 'Mensajes',
    support: 'Ayuda',
    blocked: 'Oculto',
    actions: 'M�todos',
    display: 'Pantalla',
    settings: 'Configuraci�n',
  },
  {
    visibleRegistry: 'Sichtbar in der Registrierung',
    edit: 'Bearbeiten',
    enableNotifications: 'Benachrichtigungen aktivieren', 
    sealedTopics: 'Gesicherte Themen',
    colorMode: 'Farmodus',
    hourMode: 'Stundenformat',
    language: 'Sprache',
    logout: 'Ausloggen',
    changeLogin: 'Kennwort Aktualisieren',
    deleteAccount: 'Konto L�schen',
    contacts: 'Kontakte',
    topics: 'Themen',
    messages: 'Mitteilungen',
    support: 'Helfen',
    blocked: 'Versteckt',
    actions: 'Aktionen',
    display: 'Bildschirm',
    settings: 'Aufbau',
  }
];

export default Strings;
