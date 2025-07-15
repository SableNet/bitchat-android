const About = () => {
  return (
    <div className=" h-fit w-fit rounded-lg text-primary bg-green-900 p-4 flex flex-col gap-2">
      <h3 className="text-xl">About bitchat*</h3>
      <h5 className="text-sm">
        Decentralized mesh messaging over Bluetooth LE and Wifi p2p too!
      </h5>
      <ul className="list-disc list-inside text-sm">
        <li>No servers or internet required</li>
        <li>End-to-End encrypted private messages</li>
        <li>Password Protected Channels</li>
        <li>Store-and-forward for offline peers</li>
        <li>Open-source and community-driven</li>
      </ul>
      <h4 className="text-sm font-commit-weighted">
        Triple-click title to emergency clear all data
      </h4>
    </div>
  );
};

export default About;
