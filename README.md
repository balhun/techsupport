# [Tech Support](https://techsupport-uzb8.onrender.com/) - Fejlesztés alatt

Egy egyszerű intuitív Tech Support platform. :tada:

Az oldal linkje: [https://techsupport-uzb8.onrender.com/](https://techsupport-uzb8.onrender.com/)

## A Weboldal jellemzői
- **Regisztrálás és Bejelentkezés:** A felhasználók be regisztrálni és bejelentkezni tudnak, hogy hozzáférjenek a weboldalhoz.
- **Profilkép csere:** Felhasználók és adminok egyaránt meg tudják változtatni profilképüket egy személyre szabottabb élményért.
- **Jegy létrehozás:** A Felhasználók "support ticketet" tudnak nyitni, hogy segítséget kérhessenek az adminoktól.
- **Admin jegy menedzsment:** Az adminok meg tudják tekinteni a jegyeket amiket ők kaptak, válaszolni rá és ezzel lezárni a jegyeket.

## Használt technológiák a frontendhez
- React, Tailwind, Axios, Material UI, Firebase, Cloudinary, Javascript, HTML, CSS, Vitest

## A dokumentáció oldalakra bontva:
### Home
Egy egyszerű főoldal. A "/" erre az oldalra vezet. Tailwind használata erősen látható ezen az oldalon, mivel animált h1-et készítettünk. Próbáltunk egy professzionális bemutatkozót készíteni, hogy minél több felhasználót ragadjon meg a szolgáltatásaink.

![Home oldalról kép](https://github.com/balhun/techsupport/blob/master/images/home.png)

### Profile
Ha nem vagyunk bejelentkezve átirányit a login oldalra. Felhasználótól és admintól függ, hogy mit láthatunk az oldalon. Viszont a baloldali fehér rész mindekettőnek ugyan az, egy egyszerű személyes adatokat és profilképet szerkesztő felület. Ha felhasználóként vagyunk bejelentkezve, akkor a jobb oldali fehér részen a jegyeid láthatod. Legyen az nyitott vagy már megválaszolt. Ha még nincs megválaszolva, egy MUI <Alert>-el értesítjük a felhasználót.
Viszont ha adminként vagyunk bejelentkezve, akkor a fehér részen egy nagy gomb látható ami átírányít az admin felületre.

![Profile oldalról kép](https://github.com/balhun/techsupport/blob/master/images/profile.png)

### Admin
Az adminok ezen az oldalon tudják menedzselni a beérkező jegyeket. A "/admin" vezet erre az oldalra. Ha nem adminként vagy bejelentkezve, automatikusan átirányít a főoldalra. Az oldal baloldalán találhatók a még nyitott, megválaszolásra váró segítségek. Jobboldalon pedig a már megválaszolt jegyek. Ezen az oldaon Sok a Material UI-os element, Jól lehet látni a MUI használatát.

![Admin oldalról kép](https://github.com/balhun/techsupport/blob/master/images/admin.png)

### OpenTicket
A menüben ennek az oldalnak a gombja lecserélődik egy Admin gombra, ha adminként vagyunk bejelentkezve. A "/openticket"-el juthatunk ide. Két beviteli mező és egy gomb van előttünk, egyik cím másik a hosszű szöveg. A gombal pedig elküldjük. Viszont ha nem vagyunk bejelentkezve akkor egy üzenetet láthatunk ezzel kapcsolatban.

![OpenTicket oldalról kép](https://github.com/balhun/techsupport/blob/master/images/openticket.png)

### Login
Ez az oldal ha már be vagyunk jelentkezve akkor átirányít, viszont ha nem akkor ez a "/login" oldal. Alapesetben nem lehet erre az oldalra jutni amúgy sem, ha már be vagyunk jelentkezve, viszont linken keresztül igen, ezért irányítunk át. Ezen az oldalon baloldalt bejelentkezés, elfelejtett jelszó gomb, és google bejelentkezés látható. Jobboldalon pedig regisztrálni lehet, logikusan felhasználónév, email, jelszó...

![Login oldalról kép](https://github.com/balhun/techsupport/blob/master/images/login.png)

### About
A "/about" egy egyszerű oldal amiben leírjuk melyik oldalnak mi a funkciója, és a két fejlesztőről információk.

![About oldalról kép](https://github.com/balhun/techsupport/blob/master/images/about.png)

### ResetPassword
Ha véletlen elvelejtette volna valaki a jelszavát, ezzel egy újat tud generálni. "/forgotpassword"

### NotFound
Egy egyszerű oldal amit akkor látunk ha rossz url-t adunk meg.
