var button = document.getElementById("submitBtn");
var audio = document.getElementById("bgMusic");
var audioUltah = document.getElementById("bgUltah");
var inputContainer = document.getElementById("inputContainer");
var textOutput = document.getElementById("textOutput");

function delay(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

function typeText(text, speed) {
    speed = speed || 80;
    var i = 0;
    return new Promise(function (resolve) {
        var interval = setInterval(function () {
            if (i < text.length) {
                textOutput.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
                resolve();
            }
        }, speed);
    });
}

function deleteUntil(targetLength, speed) {
    speed = speed || 100;
    return new Promise(function (resolve) {
        var interval = setInterval(function () {
            var current = textOutput.textContent;
            if (current.length > targetLength) {
                textOutput.textContent = current.slice(0, -1);
            } else {
                clearInterval(interval);
                resolve();
            }
        }, speed);
    });
}

function animateButtonClick(btn) {
    return new Promise(function (resolve) {
        btn.classList.add("clicked");
        setTimeout(function () {
            btn.classList.remove("clicked");
            resolve();
        }, 150);
    });
}

function pesan() {
    delay(1000)
        .then(function () {
            inputContainer.classList.add("visible");
            return delay(2000);
        })
        .then(function () {
            return typeText("Kado ");
        })
        .then(function () {
            return delay(2000);
        })
        .then(function () {
            return typeText("untuk pacar.....?");
        })
        .then(function () {
            return delay(2000);
        })
        .then(function () {
            return deleteUntil(5, 60);
        })
        .then(function () {
            return delay(800);
        })
        .then(function () {
            return typeText("untuk sherlyyy ❤️");
        })
        .then(function () {
            return delay(4000);
        })
        .then(function () {
            return animateButtonClick(button);
        })
        .then(function () {
            var jawab = confirm("Mau search?");
            if (!jawab) {
                return delay(500)
                    .then(function () {
                        return deleteUntil(0, 20);
                    })
                    .then(function () {
                        return typeText("hmmm.......", 200);
                    })
                    .then(function () {
                        return delay(1000);
                    })
                    .then(function () {
                        return deleteUntil(0, 30);
                    })
                    .then(function () {
                        return typeText("🙄🙄🙄 ...???", 300);
                    })
                    .then(function () {
                        return delay(1000);
                    })
                    .then(function () {
                        return deleteUntil(0, 30);
                    })
                    .then(function () {
                        return typeText("😠😠😠😠💢");
                    })
                    .then(function () {
                        return delay(2000);
                    })
                    .then(function () {
                        return deleteUntil(0, 30);
                    })
                    .then(function () {
                        return typeText("Ulanggg lagiiiiiiii.....!!!");
                    })
                    .then(function () {
                        return delay(1500);
                    })
                    .then(function () {
                        return deleteUntil(0, 10);
                    })
                    .then(function () {
                        pesan();
                    });
            } else {
                return delay(1000)
                    .then(function () {
                        return deleteUntil(0, 30);
                    })
                    .then(function () {
                        return typeText("klik tombol search ya....", 30);
                    })
                    .then(function () {
                        return delay(800);
                    })
                    .then(function () {
                        return deleteUntil(0, 30);
                    })
                    .then(function () {
                        return typeText("Kado untuk sherlyyy ❤️", 30);
                    })
                    .then(function () {
                        button.classList.add("show-button");
                        pesanAudio();
                    });
            }
        });
}

function pesanAudio() {
    button.addEventListener("click", function () {
        delay(500)
            .then(function () {
                return deleteUntil(0, 30);
            })
            .then(function () {
                return typeText("Load pesan dari bari ... ");
            })
            .then(function () {
                try {
                    audio.loop = false;
                    audio.play();
                } catch (err) {
                    console.warn("Gagal memutar audio: ", err);
                }
                return delay(15000);
            })
            .then(function () {
                return deleteUntil(0, 30);
            })
            .then(function () {
                return typeText("Autopilot Active ");
            })
            .then(function () {
                return delay(3000);
            })
            .then(function () {
                return deleteUntil(0, 30);
            })
            .then(function () {
                return delay(12000);
            })
            .then(function () {
                document.body.style.background = "black";
                hapus();
                mulaiLangitBulan();
                return delay(85000);
            })
            .then(function () {
                audioAkhir();
            });
    });
}

function audioAkhir() {
    try {
        audioUltah.currentTime = 0;
        audioUltah.loop = true;
        audioUltah.play();
    } catch (err) {
        console.warn("Gagal memutar audio akhir:", err);
    }
}

function hapus() {
    var ids = ["judul", "inputContainer", "submitBtn"];
    for (var i = 0; i < ids.length; i++) {
        (function (id) {
            var el = document.getElementById(id);
            if (el) {
                setTimeout(function () {
                    el.classList.add("fade-out");
                    el.addEventListener(
                        "transitionend",
                        function handleTransitionEnd() {
                            el.removeEventListener(
                                "transitionend",
                                handleTransitionEnd
                            );
                            if (el.parentNode) {
                                el.parentNode.removeChild(el);
                            }
                        }
                    );
                }, 50);
            }
        })(ids[i]);
    }
}

function mulaiLangitBulan(canvasId) {
    if (!canvasId) canvasId = "stars";
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");
    var width = window.innerWidth;
    var height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    window.addEventListener("resize", function () {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    });

    var stars = [];
    var bintangJatuh = [];
    var jumlahBintang = 200;
    var moon = {
        x: width + 100,
        y: height / 3,
        radius: 60,
        opacity: 1,
    };
    var cameraOffsetX = 0;
    var cameraSpeed = 0;
    var maxOffset = width / 2;

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    for (var i = 0; i < jumlahBintang; i++) {
        stars.push({
            x: random(0, width * 3),
            y: random(0, height),
            r: random(0.5, 1.5),
            opacity: random(0.3, 1),
            speed: random(0.003, 0.015),
            fadingOut: Math.random() < 0.5,
        });
    }

    function buatSatuBintangJatuh() {
        bintangJatuh.push({
            x: random(0, width),
            y: 0,
            length: random(80, 150),
            speed: random(4, 8),
            angle: Math.PI / 3 + random(-0.1, 0.1),
            opacity: 1,
        });
    }

    function spawnBintangJatuhAcak() {
        setInterval(function () {
            buatSatuBintangJatuh();
        }, random(500, 1500));
    }

    function hujanBintang(count) {
        if (!count) count = 10;
        for (var i = 0; i < count; i++) {
            (function (i) {
                setTimeout(function () {
                    buatSatuBintangJatuh();
                }, i * 100);
            })(i);
        }
    }

    function mulaiHujanBintangBersamaan(interval, jumlah) {
        if (!interval) interval = 10000;
        if (!jumlah) jumlah = 15;
        setInterval(function () {
            hujanBintang(jumlah);
        }, interval);
    }

    function updateBintangJatuh() {
        for (var i = bintangJatuh.length - 1; i >= 0; i--) {
            var b = bintangJatuh[i];
            b.x += Math.cos(b.angle) * b.speed;
            b.y += Math.sin(b.angle) * b.speed;
            b.opacity -= 0.005;
            if (b.y > height || b.opacity <= 0) {
                bintangJatuh.splice(i, 1);
            }
        }
    }

    function drawBulan() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(moon.x - cameraOffsetX, moon.y, moon.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,200," + moon.opacity + ")";
        ctx.shadowColor = "rgba(255,255,200," + moon.opacity + ")";
        ctx.shadowBlur = 40;
        ctx.fill();
        ctx.restore();
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);

        if (cameraOffsetX < maxOffset) {
            cameraOffsetX += cameraSpeed;
            if (cameraOffsetX >= maxOffset) {
                cameraSpeed = 0;
                spawnBintangJatuhAcak();
                mulaiHujanBintangBersamaan(10000, 5);
            }
        }

        for (var i = 0; i < stars.length; i++) {
            var s = stars[i];
            s.opacity += s.fadingOut ? -s.speed : s.speed;
            if (s.opacity <= 0.2) {
                s.opacity = 0.2;
                s.fadingOut = false;
            } else if (s.opacity >= 1) {
                s.opacity = 1;
                s.fadingOut = true;
            }

            ctx.beginPath();
            ctx.arc(s.x - cameraOffsetX, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255,255,255," + s.opacity + ")";
            ctx.fill();
        }

        drawBulan();
        updateBintangJatuh();

        for (var j = 0; j < bintangJatuh.length; j++) {
            var b = bintangJatuh[j];
            ctx.beginPath();
            ctx.moveTo(b.x, b.y);
            ctx.lineTo(
                b.x - Math.cos(b.angle) * b.length,
                b.y - Math.sin(b.angle) * b.length
            );
            ctx.strokeStyle = "rgba(255,255,255," + b.opacity + ")";
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        requestAnimationFrame(draw);
    }

    setTimeout(function () {
        cameraSpeed = 0.5;
    }, 6000);

    draw();
}

pesan();
