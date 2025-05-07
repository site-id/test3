from rich.text import Text
from rich.console import Console
from threading import Thread
import time


console = Console()

def animate_text(text, delay=0.1, color="white"):
    for char in text:
        t = Text(char, style=color)
        console.print(t, end="")
        time.sleep(delay)
    console.print()

def sing_lyric(lyric, delay, speed, color):
    time.sleep(delay)
    animate_text(lyric, speed, color)

def sing_song():
    lyrics = [
        ("tante...", 0.08, "white"),
        ("sudah terbiasa terjadi tante", 0.09, "white"),
        ("teman datang ketika lagi butuh saja", 0.1, "white"),
        ("coba kalau lagi susaahhh", 0.15, "white"),
        ("meereka semua menghilaAaAaAaAng", 0.15, "white")
    ]

    
    
    delays = [0.3, 2.5, 5.8, 9.5, 13.5]
    threads = []
    
    for i in range(len(lyrics)):
        lyric, speed, color = lyrics[i]
        delay = delays[i]
        t = Thread(target=sing_lyric, args=(lyric, delay, speed, color))
        threads.append(t)
        t.start()
    
    for thread in threads:
        thread.join()

if __name__ == "__main__":
    sing_song()