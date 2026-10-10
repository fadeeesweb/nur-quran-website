# Generates public/og/og-cover.png (1200x630) from the official logo + brand palette.
# Run once:  powershell -ExecutionPolicy Bypass -File scripts\make-og-image.ps1
Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$logoPath = Join-Path $root "public\logo\logo.png"
$outDir = Join-Path $root "public\og"
$outPath = Join-Path $outDir "og-cover.png"
$amiriPath = "D:\B quran app\assets\fonts\Amiri-Regular.ttf"

$W = 1200
$H = 630

$bmp = New-Object System.Drawing.Bitmap($W, $H)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$fontCollection = New-Object System.Drawing.Text.PrivateFontCollection

try {
    $g.SmoothingMode = 'AntiAlias'
    $g.TextRenderingHint = 'AntiAlias'
    $g.InterpolationMode = 'HighQualityBicubic'

    $green = [System.Drawing.Color]::FromArgb(255, 4, 44, 32)
    $gold = [System.Drawing.Color]::FromArgb(255, 201, 168, 92)
    $goldSoft = [System.Drawing.Color]::FromArgb(140, 201, 168, 92)
    $ivory = [System.Drawing.Color]::FromArgb(255, 250, 249, 246)
    $muted = [System.Drawing.Color]::FromArgb(255, 176, 183, 176)

    $g.Clear($green)

    $penGold = New-Object System.Drawing.Pen($gold, 2)
    $penGoldSoft = New-Object System.Drawing.Pen($goldSoft, 1)
    $g.DrawRectangle($penGold, 40, 40, ($W - 81), ($H - 81))
    $g.DrawRectangle($penGoldSoft, 53, 53, ($W - 107), ($H - 107))

    $logo = [System.Drawing.Image]::FromFile($logoPath)
    $g.DrawImage($logo, 110, 195, 240, 240)

    $brushIvory = New-Object System.Drawing.SolidBrush($ivory)
    $brushGold = New-Object System.Drawing.SolidBrush($gold)
    $brushMuted = New-Object System.Drawing.SolidBrush($muted)

    $titleFont = New-Object System.Drawing.Font("Georgia", 96, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
    $subFont = New-Object System.Drawing.Font("Georgia", 34, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
    $tagFont = New-Object System.Drawing.Font("Segoe UI", 26, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)

    $g.DrawString("Nur", $titleFont, $brushIvory, 400, 178)
    $g.DrawString("Quran & Islamic Companion", $subFont, $brushGold, 404, 310)
    $g.DrawString("Read  -  Listen  -  Understand", $tagFont, $brushMuted, 404, 372)

    # Arabic word mark, when the Amiri font file is available.
    if (Test-Path $amiriPath) {
        $fontCollection.AddFontFile($amiriPath)
        $arabicFont = New-Object System.Drawing.Font($fontCollection.Families[0], 72, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
        $brushArabic = New-Object System.Drawing.SolidBrush($gold)
        $g.DrawString([string]([char]0x0646) + [char]0x0648 + [char]0x0631, $arabicFont, $brushArabic, 404, 440)
        $arabicFont.Dispose()
    }

    New-Item -ItemType Directory -Force -Path $outDir | Out-Null
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Output "Wrote $outPath"
}
finally {
    $g.Dispose()
    $bmp.Dispose()
    $fontCollection.Dispose()
}
