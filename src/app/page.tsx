import BeepComponent from "@/components/beep/Beep"
import HeaderComponent from "@/components/header/Header"
import MetronomeComponent from "@/components/metronome/Metronome"
import SabbathComponent from "@/components/sabbath/Sabbath"

export default function Home() {
  return (
    <div>
      <HeaderComponent />
      <MetronomeComponent />
      <SabbathComponent />
      <BeepComponent />
    </div>
  )
}
