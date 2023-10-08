import BeepComponent from "@/components/beep/Beep"
import MetronomeComponent from "@/components/metronome/Metronome"
import SabbathComponent from "@/components/sabbath/Sabbath"

export default function Home() {
  return (
    <div>
      <p>Metronome</p>
      <MetronomeComponent />
      <SabbathComponent />
      <BeepComponent />
    </div>
  )
}
