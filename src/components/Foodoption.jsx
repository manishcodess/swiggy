export default function Foodoption({ link }) {
  //{link} is destructed so dont need to use by {props.link}
  return (
    <div className="w-24 sm:w-28 md:w-32">
      <img className="h-auto w-full" src={link} alt="food option" />
    </div>
  );
}
//image k andar hi naam likha h khane ka
