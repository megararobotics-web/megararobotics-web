import os
import shutil
import subprocess

BASE = os.path.dirname(__file__)     # src/assets
OLD = os.path.join(BASE, "old")
TARGET = BASE

CRF = 32
BITRATE = "800k"

os.makedirs(OLD, exist_ok=True)

def compress(src, out):
    cmd = [
        "ffmpeg", "-y",
        "-i", src,
        "-c:v", "libvpx-vp9",
        "-crf", str(CRF),
        "-b:v", BITRATE,
        "-pix_fmt", "yuva420p",  # ✅ KEEP TRANSPARENCY
        "-an",
        out
    ]
    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

def main():
    for file in os.listdir(TARGET):
        if file.lower().endswith(".webm"):
            src = os.path.join(TARGET, file)
            backup = os.path.join(OLD, file)

            # Step 1: copy original once
            if not os.path.exists(backup):
                shutil.copy2(src, backup)
                print(f"📦 Backup: old/{file}")

            # Step 2: compress from backup → replace
            print(f"⚡ Compressing with alpha: {file}")
            compress(backup, src)

    print("\n✅ All videos optimized & transparency preserved!")

if __name__ == "__main__":
    main()
