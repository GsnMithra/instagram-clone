import './Footer.css';

function Footer () {
    return (
        <footer className="footer">
            <div className='footerUpper'>
                <div id='underlineLink'><a href='https://about.meta.com/'>Meta</a></div>
                <div id='underlineLink'><a href='https://about.meta.com/'>About</a></div>
                <div id='underlineLink'><a href='https://about.meta.com/'>Blog</a></div>
                <div id='link'><a href='https://about.meta.com/'>Jobs</a></div>
                <div id='underlineLink'><a href='https://about.meta.com/'>Help</a></div>
                <div id='underlineLink'><a href='https://about.meta.com/'>API</a></div>
                <div id='link'><a href='https://about.meta.com/'>Privacy</a></div>
                <div id='link'><a href='https://about.meta.com/'>Terms</a></div>
                <div id='link'><a href='https://about.meta.com/'>Top Accounts</a></div>
                <div id='link'><a href='https://about.meta.com/'>Locations</a></div>
                <div id='link'><a href='https://about.meta.com/'>Instagram Lite</a></div>
                <div id='underlineLink'><a href='https://about.meta.com/'>Threads</a></div>
                <div id='link'><a href='https://about.meta.com/'>Contact Uploading & Non-Users</a></div>
                <div id='underlineLink'><a href='https://about.meta.com/'>Meta Verified</a></div>
            </div>
            <div className='footerLower'>
                <div class="language-picker">
                    <form action="" class="language-picker__form">
                    <div className='custom-list'>
                        <select id="language" name="language">
                            <option value="en" lang="en">English</option>
                            <option value="es" lang="es">Español</option>
                            <option value="fr" lang="fr">Français</option>
                            <option value="de" lang="de">Deutsch</option>
                            <option value="it" lang="it">Italiano</option>
                            <option value="pt" lang="pt">Português</option>
                            <option value="nl" lang="nl">Nederlands</option>
                            <option value="ru" lang="ru">Русский</option>
                            <option value="ja" lang="ja">日本語</option>
                            <option value="zh" lang="zh">中文 (简体)</option>
                            <option value="ko" lang="ko">한국어</option>
                            <option value="ar" lang="ar">العربية</option>
                            <option value="hi" lang="hi">हिन्दी</option>
                            <option value="tr" lang="tr">Türkçe</option>
                            <option value="sv" lang="sv">Svenska</option>
                            <option value="pl" lang="pl">Polski</option>
                            <option value="no" lang="no">Norsk</option>
                            <option value="da" lang="da">Dansk</option>
                            <option value="fi" lang="fi">Suomi</option>
                            <option value="el" lang="el">Ελληνικά</option>
                            <option value="he" lang="he">עברית</option>
                            <option value="id" lang="id">Bahasa Indonesia</option>
                            <option value="cs" lang="cs">Čeština</option>
                            <option value="hu" lang="hu">Magyar</option>
                            <option value="uk" lang="uk">Українська</option>
                            <option value="vi" lang="vi">Tiếng Việt</option>
                            <option value="th" lang="th">ไทย</option>
                            <option value="ro" lang="ro">Română</option>
                            <option value="bn" lang="bn">বাংলা</option>
                            <option value="ms" lang="ms">Bahasa Melayu</option>
                            <option value="ta" lang="ta">தமிழ்</option>
                            <option value="gu" lang="gu">ગુજરાતી</option>
                            <option value="pa" lang="pa">ਪੰਜਾਬੀ</option>
                            <option value="jw" lang="jw">Basa Jawa</option>
                            <option value="bg" lang="bg">Български</option>
                            <option value="hr" lang="hr">Hrvatski</option>
                            <option value="sr" lang="sr">Српски</option>
                            <option value="sk" lang="sk">Slovenčina</option>
                            <option value="sl" lang="sl">Slovenščina</option>
                            <option value="fil" lang="fil">Filipino</option>
                            <option value="kk" lang="kk">Қазақша</option>
                            <option value="sw" lang="sw">Kiswahili</option>
                            <option value="lt" lang="lt">Lietuvių</option>
                            <option value="lv" lang="lv">Latviešu</option>
                        </select>
                    </div>
                    </form>
                </div>
                <p><i className="arrow down"></i></p>
                © 2023 Instagram from Meta
            </div>
        </footer>
    );
}

export default Footer;