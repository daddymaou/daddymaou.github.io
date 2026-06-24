<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>𝗠𝗔𝗢𝗨𝗞𝗡𝗢𝗪𝗦𝗝𝗔𝗩𝗔 · builder</title>
    <!-- Google Font & Font Awesome Icons -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: #0b0d11;
            background-image: radial-gradient(circle at 20% 30%, #141a24 0%, #090b0e 90%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            padding: 2rem 1.5rem;
            color: #eef2f6;
            line-height: 1.5;
        }

        .card {
            max-width: 880px;
            width: 100%;
            background: rgba(18, 24, 34, 0.75);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.04);
            border-radius: 3.5rem;
            padding: 2.8rem 2.8rem 2.8rem 2.8rem;
            box-shadow: 0 30px 50px -20px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.02) inset;
            transition: all 0.2s ease;
        }

        /* ---- dope typography ---- */
        .glow-title {
            font-size: 2.4rem;
            font-weight: 800;
            letter-spacing: 0.04em;
            background: linear-gradient(135deg, #f0f5ff 0%, #b7c9e2 80%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 0 0 30px rgba(110, 170, 255, 0.15);
            display: inline-block;
            margin-bottom: 0.2rem;
            font-family: 'Inter', sans-serif;
        }

        .sub-brand {
            font-size: 1rem;
            font-weight: 500;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            color: #8899b0;
            border-left: 2px solid #3e526b;
            padding-left: 1rem;
            margin-left: 0.25rem;
            display: inline-block;
            background: linear-gradient(145deg, #a0b4cc, #6c7e96);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            font-weight: 600;
        }

        .section-title {
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: #6b809b;
            margin: 1.8rem 0 1rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.03);
            padding-bottom: 0.4rem;
            display: flex;
            align-items: center;
            gap: 0.6rem;
        }

        .section-title i {
            font-size: 0.9rem;
            color: #4e6b8a;
            width: 1.4rem;
        }

        .tagline {
            font-size: 1.1rem;
            font-weight: 400;
            color: #b2c8e0;
            background: rgba(255, 255, 255, 0.02);
            padding: 0.6rem 1.2rem;
            border-radius: 60px;
            display: inline-block;
            border: 1px solid rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(4px);
            margin-top: 0.2rem;
        }

        .flex-row {
            display: flex;
            flex-wrap: wrap;
            gap: 2.5rem 2rem;
            align-items: flex-start;
            margin: 1.2rem 0 0.8rem 0;
        }

        .profile-pic-area {
            flex: 0 0 120px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .pic-frame {
            width: 120px;
            height: 120px;
            border-radius: 40px;
            background: linear-gradient(145deg, #1f2a38, #121a24);
            border: 2px solid rgba(255, 255, 255, 0.04);
            box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            transition: all 0.25s;
        }

        .pic-frame img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        .pic-placeholder {
            color: #38506b;
            font-size: 2.4rem;
            font-weight: 200;
            letter-spacing: 0.1rem;
            background: #10161f;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Inter', sans-serif;
        }

        .pic-caption {
            font-size: 0.65rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #6a7f99;
            margin-top: 0.6rem;
            opacity: 0.7;
        }

        .info-grid {
            flex: 1;
            min-width: 200px;
        }

        .whoami p {
            font-size: 0.95rem;
            color: #d3dfec;
            max-width: 580px;
            line-height: 1.7;
            margin-top: 0.2rem;
        }

        .whoami strong {
            color: #b7d0f0;
            font-weight: 600;
        }

        /* lists */
        .tech-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 0.8rem 1.8rem;
            margin: 0.5rem 0 0.2rem 0;
        }

        .tech-cat {
            min-width: 110px;
        }

        .tech-cat .label {
            font-size: 0.7rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #627a97;
            display: block;
            margin-bottom: 0.2rem;
        }

        .tech-cat .items {
            font-size: 0.9rem;
            font-weight: 500;
            color: #d3e3f5;
            line-height: 1.6;
        }

        .tech-cat .items span {
            background: rgba(255, 255, 255, 0.02);
            padding: 0.1rem 0.5rem;
            border-radius: 40px;
            border: 1px solid rgba(255, 255, 255, 0.02);
            margin-right: 0.2rem;
            white-space: nowrap;
        }

        .bullet-list {
            list-style: none;
            padding: 0;
            margin: 0.3rem 0 0.2rem 0;
        }

        .bullet-list li {
            padding: 0.25rem 0;
            font-size: 0.92rem;
            color: #cbdae9;
            display: flex;
            align-items: baseline;
            gap: 0.5rem;
        }

        .bullet-list li::before {
            content: "▹";
            color: #4b7fb5;
            font-weight: 300;
            font-size: 1rem;
        }

        .philosophy-box {
            background: rgba(255, 255, 255, 0.01);
            border-left: 3px solid #3a5f83;
            padding: 0.5rem 1.2rem;
            border-radius: 0 20px 20px 0;
            margin: 0.8rem 0 0.2rem 0;
            font-style: italic;
            color: #b8cee5;
            font-weight: 400;
            font-size: 0.95rem;
            max-width: 90%;
        }

        .philosophy-box i {
            color: #6a8fb0;
            margin-right: 0.4rem;
        }

        /* social icons */
        .social-links {
            display: flex;
            gap: 1.8rem;
            flex-wrap: wrap;
            align-items: center;
            margin: 1.5rem 0 0.2rem 0;
            padding-top: 0.5rem;
            border-top: 1px solid rgba(255, 255, 255, 0.02);
        }

        .social-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.85rem;
            font-weight: 500;
            color: #acbfd6;
            text-decoration: none;
            transition: all 0.2s;
            padding: 0.3rem 0.6rem 0.3rem 0.3rem;
            border-radius: 60px;
            background: rgba(255, 255, 255, 0.01);
            border: 1px solid transparent;
        }

        .social-item i {
            font-size: 1.25rem;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.02);
            border-radius: 40px;
            color: #b3c9e5;
            transition: 0.2s;
        }

        .social-item:hover {
            color: #e6effa;
            border-color: rgba(255, 255, 255, 0.04);
            background: rgba(255, 255, 255, 0.03);
        }

        .social-item:hover i {
            color: #8bb9ff;
            background: rgba(60, 130, 210, 0.15);
            box-shadow: 0 0 20px rgba(70, 150, 255, 0.1);
        }

        .social-item .handle {
            opacity: 0.8;
            font-weight: 400;
        }

        .footer-quote {
            margin-top: 2rem;
            text-align: center;
            font-size: 0.9rem;
            letter-spacing: 0.08em;
            color: #6b7f97;
            border-top: 1px solid rgba(255, 255, 255, 0.02);
            padding-top: 1.5rem;
            font-weight: 400;
        }

        .footer-quote i {
            color: #4e7397;
            margin: 0 0.3rem;
        }

        .dope-highlight {
            background: linear-gradient(145deg, #cedff5, #a5bedb);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            font-weight: 600;
        }

        /* responsive */
        @media (max-width: 600px) {
            .card {
                padding: 1.8rem 1.2rem;
                border-radius: 2.5rem;
            }
            .flex-row {
                flex-direction: column;
                align-items: center;
            }
            .profile-pic-area {
                flex: 0 0 auto;
            }
            .glow-title {
                font-size: 1.9rem;
            }
            .sub-brand {
                font-size: 0.75rem;
                padding-left: 0.6rem;
                margin-left: 0;
            }
            .tech-grid {
                flex-direction: column;
                gap: 0.5rem;
            }
            .social-links {
                gap: 0.8rem;
                justify-content: center;
            }
            .social-item {
                font-size: 0.75rem;
            }
            .philosophy-box {
                max-width: 100%;
            }
        }

        @media (max-width: 450px) {
            .glow-title {
                font-size: 1.6rem;
                display: block;
            }
            .sub-brand {
                display: block;
                margin-left: 0;
                padding-left: 0;
                border-left: none;
            }
        }

        /* small details */
        .badge-dot {
            display: inline-block;
            width: 6px;
            height: 6px;
            background: #3f7eb0;
            border-radius: 20px;
            margin-right: 6px;
        }

        .code-symbol {
            font-family: 'Inter', monospace;
            font-weight: 300;
            color: #526f8d;
        }

        .uppercase-dope {
            letter-spacing: 0.1em;
        }
    </style>
</head>
<body>

    <div class="card">

        <!-- HEADER -->
        <div style="display: flex; flex-wrap: wrap; align-items: baseline; gap: 0.4rem 0.8rem;">
            <span class="glow-title">𝗠𝗔𝗢𝗨𝗞𝗡𝗢𝗪𝗦𝗝𝗔𝗩𝗔</span>
            <span class="sub-brand">✦ builder</span>
        </div>
        <div style="margin-top: 0.1rem;">
            <span class="tagline"><i class="fas fa-bolt" style="margin-right: 10px; color: #6a9ed4;"></i> Building Things That Shouldn't Exist Yet.</span>
        </div>

        <!-- FLEX ROW: profile pic + whoami -->
        <div class="flex-row">

            <!-- PROFILE PICTURE AREA (add your image here) -->
            <div class="profile-pic-area">
                <div class="pic-frame">
                    <!-- replace src with your own image, or keep placeholder -->
                    <img src="https://ui-avatars.com/api/?name=MAOUK&background=1a2330&color=9bb8e6&size=120&font-size=0.5&bold=true" alt="profile" />
                    <!-- if you want a plain placeholder, comment img and uncomment below -->
                    <!-- <div class="pic-placeholder">📸</div> -->
                </div>
                <div class="pic-caption"><i class="far fa-image" style="margin-right: 4px;"></i> + add yours</div>
            </div>

            <!-- WHOAMI -->
            <div class="info-grid whoami">
                <p><strong>// WHOAMI</strong><br />
                I'm a developer obsessed with turning ideas into systems.<br />
                From AI-powered tools and automation workflows to scalable web applications and digital products, I enjoy building technology that feels simple on the surface and powerful underneath.<br />
                I spend most of my time exploring new technologies, creating products, solving problems, and experimenting with ideas that push beyond conventional software.
                </p>
            </div>
        </div>

        <!-- CURRENTLY -->
        <div class="section-title"><i class="fas fa-sync-alt fa-fw"></i> CURRENTLY</div>
        <div style="display: flex; flex-wrap: wrap; gap: 1.2rem 2.8rem;">
            <div>
                <div style="font-weight: 600; font-size:0.8rem; letter-spacing:0.05em; color:#6f89a6;">Learning</div>
                <ul class="bullet-list">
                    <li>Advanced AI Systems</li>
                    <li>Scalable Architectures</li>
                    <li>Product Engineering</li>
                </ul>
            </div>
            <div>
                <div style="font-weight: 600; font-size:0.8rem; letter-spacing:0.05em; color:#6f89a6;">Building</div>
                <ul class="bullet-list">
                    <li>AI Experiences</li>
                    <li>Developer Tools</li>
                    <li>Automation Systems</li>
                    <li>Modern Web Applications</li>
                </ul>
            </div>
            <div>
                <div style="font-weight: 600; font-size:0.8rem; letter-spacing:0.05em; color:#6f89a6;">Exploring</div>
                <ul class="bullet-list">
                    <li>Human + AI Workflows</li>
                    <li>Intelligent Agents</li>
                    <li>Future Interfaces</li>
                </ul>
            </div>
        </div>

        <!-- TECH STACK -->
        <div class="section-title"><i class="fas fa-code fa-fw"></i> TECH STACK</div>
        <div class="tech-grid">
            <div class="tech-cat">
                <span class="label">Frontend</span>
                <div class="items">
                    <span>HTML</span> <span>CSS</span> <span>JS</span> <span>TS</span><br />
                    <span>React</span> <span>Next.js</span> <span>Tailwind</span>
                </div>
            </div>
            <div class="tech-cat">
                <span class="label">Backend</span>
                <div class="items">
                    <span>Node.js</span> <span>Express</span><br />
                    <span>REST</span> <span>Auth</span><br />
                    <span>MongoDB</span> <span>Firebase</span> <span>Supabase</span>
                </div>
            </div>
            <div class="tech-cat">
                <span class="label">AI & Automation</span>
                <div class="items">
                    <span>AI Agents</span> <span>Prompt Eng.</span><br />
                    <span>Workflow Auto.</span> <span>Telegram Bots</span><br />
                    <span>Business Auto.</span>
                </div>
            </div>
        </div>

        <!-- PHILOSOPHY -->
        <div class="section-title"><i class="fas fa-quote-right fa-fw"></i> PHILOSOPHY</div>
        <div class="philosophy-box">
            <i class="fas fa-quote-left" style="opacity:0.3;"></i> Software should feel effortless.<br />
            The best systems aren't the ones users notice —<br />
            they're the ones quietly solving problems in the background.
        </div>

        <!-- SOCIAL + CONTACT (with icons) -->
        <div class="section-title" style="margin-top: 1.2rem;"><i class="fas fa-share-alt fa-fw"></i> CONNECT</div>
        <div class="social-links">
            <a href="#" class="social-item"><i class="fab fa-discord"></i> <span class="handle">fwmaou</span></a>
            <a href="#" class="social-item"><i class="fab fa-telegram-plane"></i> <span class="handle">@fwmaou</span></a>
            <a href="#" class="social-item"><i class="fab fa-whatsapp"></i> <span class="handle">+234 815 489 9093</span></a>
            <!-- extra social (optional) you can add more -->
            <a href="#" class="social-item"><i class="fab fa-github"></i> <span class="handle">maoukn</span></a>
            <a href="#" class="social-item"><i class="fab fa-x-twitter"></i> <span class="handle">@fwmaou</span></a>
        </div>

        <!-- FOOTER QUOTE -->
        <div class="footer-quote">
            <i class="fas fa-code"></i> Code. Automate. Iterate. <i class="fas fa-code"></i>
            <span style="display: inline-block; margin-left: 0.8rem; opacity:0.4; font-size:0.75rem;">✦</span>
            <span style="display: inline-block; margin-left: 0.4rem; opacity:0.5; font-weight:300;">v1.0</span>
        </div>

    </div>

</body>
</html>
