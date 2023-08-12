import MouseFollower from "mouse-follower";

export namespace GlobalStore {
  export interface Animation {
    cursor: MouseFollower | null;
    scroll: {
      x: number;
      y: number;
    };
  }
}
